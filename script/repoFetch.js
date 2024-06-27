function fetchReadme() {
    var user = 'Unofficial-Life';
    var repo = 'Unofficial-Life';
    var readmeURL = 'https://api.github.com/repos/' + user + '/' + repo + '/readme';
    
    // Display loading message
    $(".info-wrapper").html('<p>In Making...</p>');
    
    $.get(readmeURL, function(data) {
        var readmeContent = atob(data.content); 
        var readmeHTML = marked(readmeContent); 
        $(".info-wrapper").html('<div class="repo-readme-wrapper"><h2>' + repo + '</h2>' + readmeHTML + '</div>');
    }).fail(function(jqXHR, textStatus, errorThrown) {
        console.error("Error fetching README.md:", textStatus, errorThrown); // Log the error
        $(".info-wrapper").html('<p>Failed to fetch README.md for ' + repo + '.</p>');
    });
}

$(document).ready(function() {
    fetchReadme();
});
