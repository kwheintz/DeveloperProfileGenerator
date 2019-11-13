function Developer () {

    this.addUsername = function(value) {
        this.username = value;
    }
    this.addImage = function(value) {
        this.image = value;
    }
    this.addLocation = function(value) {
        this.location = value;
    }
    this.addGithub = function(value) {
        this.github = value;
    }
    this.addBlog = function(value) {
        this.blog = value;
    }
    this.addBio = function(value) {
        this.bio = value;
    }
    this.addRepos = function(value) {
        this.repos = value;
    }
    this.addFollowers = function(value) {
        this.followers = value;
    }
    this.addStars = function(value) {
        this.stars = value;
    }

}

const developer = new Developer;
developer.addUsername(value);
developer.addImage(value);
developer.addLocation(value);
developer.addGithub(value);
developer.addBlog(value);
developer.addBio(value);
developer.addRepos(value);
developer.addFollowers(value);
developer.addStars(value);
