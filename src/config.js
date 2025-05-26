class Config {
    // Get API_BASE_URL from environment variables or use a default value (Using Vite)
    static API_BASE_URL = import.meta.env.BACKEND_APP_URL || '/api';
}

export default Config;