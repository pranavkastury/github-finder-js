//Client ID: 09476d82b30e711cd0bc

//Client Secret: 6450a292fd10f98fd465df920b001f550a8ec011

class Github {
  constructor() {
    this.client_id = "09476d82b30e711cd0bc";
    this.client_secret = "6450a292fd10f98fd465df920b001f550a8ec011";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos,
    };
  }
}
