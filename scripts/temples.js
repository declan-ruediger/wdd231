const toggle_button_id = "nav-toggle-button";

let navBarVisible = true;

function toggleVisibilityOfNavBarLinks() {
    if (navBarVisible) {
        setVisibilityOfNavBarLinks("hidden");
    } else {
        setVisibilityOfNavBarLinks("visible");
    }
}

function setVisibilityOfNavBarLinks(visibility_setting) {
    let display_value = ""
    switch (visibility_setting) {
        case "visible":
            display_value = "block";
            navBarVisible = true;
        case "hidden":
            display_value = "none";
            navBarVisible = false;
        default:
            TypeError();

    }
    let nav_bar =   document.getElementById("nav-bar");
    for (i = 0; i < nav_bar.children.length; i++)
    {
        let element = nav_bar.children[i];
        if (element.tagName == "A" & element.id != toggle_button_id) {
            element.style = `display: ${display_value};`;
        }
    }
}

// TODO: if mobile
if (true)
{
    let nav_bar = document.getElementById("nav-bar");
    
    setVisibilityOfNavBarLinks("hidden");

    let toggle_button_template = document.createElement("a");
    toggle_button_template.id = toggle_button_id;
    toggle_button_template.className = "toggle-button";
    toggle_button_template.innerHTML = "X";
    toggle_button_template.onclick = toggleVisibilityOfNavBarLinks;

    // show hamburger icon
    nav_bar.appendChild(
        toggle_button_template
    );
    //toogle nav a's from viewable to not viewable
}
// on hamburger click:
 // change hamburger to x

 // on x click, close hamburger