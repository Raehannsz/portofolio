/**
 * API Service Layer untuk Portfolio
 * Menangani komunikasi dengan backend PHP
 */

// Base URL untuk API - sesuaikan dengan server Anda
const API_BASE_URL = 'http://localhost/portofolio-react/backend/api';

export interface Experience {
    id: string;
    title: string;
    company: string;
    description: string;
    techStack: string[];
    year: string;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    image?: string;
    techStack: string[];
    liveUrl?: string;
    githubUrl?: string;
    year: string;
    featured?: boolean;
}

interface ApiResponse<T> {
    success: boolean;
    data?: T;
    message?: string;
}

/**
 * Fetch experiences dari API
 */
export async function fetchExperiences(): Promise<Experience[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/experiences.php`);
        const result: ApiResponse<Experience[]> = await response.json();

        if (result.success && result.data) {
            return result.data;
        }
        console.warn('API response not successful:', result.message);
        return [];
    } catch (error) {
        console.error('Failed to fetch experiences:', error);
        return [];
    }
}

/**
 * Fetch projects dari API
 */
export async function fetchProjects(): Promise<Project[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/projects.php`);
        const result: ApiResponse<Project[]> = await response.json();

        if (result.success && result.data) {
            return result.data;
        }
        console.warn('API response not successful:', result.message);
        return [];
    } catch (error) {
        console.error('Failed to fetch projects:', error);
        return [];
    }
}

/**
 * Create new experience
 */
export async function createExperience(experience: Omit<Experience, 'id'>): Promise<Experience | null> {
    try {
        const response = await fetch(`${API_BASE_URL}/experiences.php`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(experience)
        });
        const result: ApiResponse<Experience> = await response.json();

        if (result.success && result.data) {
            return result.data;
        }
        console.error('Failed to create experience:', result.message);
        return null;
    } catch (error) {
        console.error('API error:', error);
        return null;
    }
}

/**
 * Update experience
 */
export async function updateExperienceApi(experience: Experience): Promise<boolean> {
    try {
        const response = await fetch(`${API_BASE_URL}/experiences.php`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(experience)
        });
        const result: ApiResponse<Experience> = await response.json();
        return result.success;
    } catch (error) {
        console.error('API error:', error);
        return false;
    }
}

/**
 * Delete experience
 */
export async function deleteExperienceApi(id: string): Promise<boolean> {
    try {
        const response = await fetch(`${API_BASE_URL}/experiences.php?id=${id}`, {
            method: 'DELETE'
        });
        const result: ApiResponse<void> = await response.json();
        return result.success;
    } catch (error) {
        console.error('API error:', error);
        return false;
    }
}

/**
 * Create new project
 */
export async function createProject(project: Omit<Project, 'id'>): Promise<Project | null> {
    try {
        const response = await fetch(`${API_BASE_URL}/projects.php`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(project)
        });
        const result: ApiResponse<Project> = await response.json();

        if (result.success && result.data) {
            return result.data;
        }
        console.error('Failed to create project:', result.message);
        return null;
    } catch (error) {
        console.error('API error:', error);
        return null;
    }
}

/**
 * Update project
 */
export async function updateProjectApi(project: Project): Promise<boolean> {
    try {
        const response = await fetch(`${API_BASE_URL}/projects.php`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(project)
        });
        const result: ApiResponse<Project> = await response.json();
        return result.success;
    } catch (error) {
        console.error('API error:', error);
        return false;
    }
}

/**
 * Delete project
 */
export async function deleteProjectApi(id: string): Promise<boolean> {
    try {
        const response = await fetch(`${API_BASE_URL}/projects.php?id=${id}`, {
            method: 'DELETE'
        });
        const result: ApiResponse<void> = await response.json();
        return result.success;
    } catch (error) {
        console.error('API error:', error);
        return false;
    }
}

/**
 * Check if API is available
 */
export async function checkApiHealth(): Promise<boolean> {
    try {
        const response = await fetch(`${API_BASE_URL}/experiences.php`, {
            method: 'GET',
            signal: AbortSignal.timeout(3000) // 3 second timeout
        });
        return response.ok;
    } catch {
        return false;
    }
}
