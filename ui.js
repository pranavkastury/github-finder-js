class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  showProfile(user) {
    this.profile.innerHTML = `
    <div class="row">
    <div class="col-md-3">
      <img src="${user.avatar_url}" alt="" class="img-fluid mb-2">
      <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
    </div>
    <div class="col-md-9">
      <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
      <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
      <span class="badge badge-success">Followers: ${user.followers}</span>
      <span class="badge badge-info">Following: ${user.following}</span>
      <br><br>
      <ul class="list-group">
        <li class="list-group-item">Company: ${user.company}</li>
        <li class="list-group-item">Website/Blog: ${user.blog}</li>
        <li class="list-group-item">Location: ${user.location}</li>
        <li class="list-group-item">Member Since: ${user.created_at}</li>
      </ul>
    </div>
  </div>
</div>
<h3 class="page-heading mb-3">Latest Repos</h3>
<div id="repos"></div>
    `;
  }

  //Show User Repos
  showRepos(repos) {
    let output = "";
    repos.forEach(function (repo) {
      output += `
    <div class="card card-body mb-2">
    <div class="row">
      <div class="col-md-6">
        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
      </div>
      <div class="col-md-6">
        <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
        <span class="badge badge-primary">Watchers: ${repo.watchers_count}</span>
        <span class="badge badge-primary">Forks: ${repo.forks_count}</span>
      </div>
    </div>
  </div>
    `;
    });

    //Output repos
    document.getElementById("repos").innerHTML = output;
  }

  //show Alert message
  showAlert(message, className) {
    //Clear ny remaining alerts
    this.clearAlert();
    console.clear();
    //create div for alert
    const div = document.createElement("div");
    //add classname
    div.className = className;
    div.appendChild(document.createTextNode(message));
    //Get Parent
    const container = document.querySelector(".searchContainer");
    //Get Search Box
    const search = document.querySelector(".search");
    //Insert alert
    container.insertBefore(div, search);

    //Timeout after 3 seconds
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }
  //clear Profile
  clearProfile() {
    this.profile.innerHTML = "";
  }
  //clear Alert Message so that it displays only once
  clearAlert() {
    const currentAlert = document.querySelector(".alert");

    if (currentAlert) {
      currentAlert.remove();
    }
  }
}
