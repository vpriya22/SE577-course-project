export interface RepoGithubInterface {
    name: string;
    description: string;
    html_url: string;
    created_at: string;
    updated_at: string;
}

export interface RepoDbInterface{
    name: string;
    description: string;
    url: string;
    last_update: string;
}

export interface GistGithubInterface {
    description: string;
    files: string,
    url: string
    language: string;
}
