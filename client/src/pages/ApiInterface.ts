export interface RepoGithubInterface {
    name: string;
    description: string;
    html_url: string;
    created_at: string;
    updated_at: string;
    commits: CommitGithubInterface[];
    owner: {login: string},
    showCommits?: boolean; // Optional property to control the visibility of commits list
}
export interface CommitGithubInterface {
    author: {login: string},
    commit: {message: string, author: {date: string}}
}
export interface RepoDbInterface{
    name: string;
    description: string;
    url: string;
}
export interface GistGithubInterface {
    id: string;
    html_url: string;
    description: string;
  }
  