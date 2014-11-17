noGL.js
=======
####A minimalist javascript canvas 3d detection script.####
----------------------------------------

### COPYRIGHT ###
2014 [Active9](http://active9.com) LLC.

### LICENSE ###
- `MIT`

### PREAMBLE ###
> ***This script safely detects when a browser does not have canvas webGL support.***

### INSTALLATION ###
> ***Add the following script tag inside the <head> of your web page***
  **be sure to replace the {PATH_TO_noGL} with the actual path to the script*

>>`<script src="{PATH_TO_noGL}/noGL.js"></script>`

### USAGE ###
> ***Add the following script in the *&lt;body&gt;* of your page where the alert should appear***
>>`<script>
  if (!noGL) {
    document.write('<p class="chromeframe" style="z-index:9999;">Your browser or device does not support 3D rendering. <a href="http://browsehappy.com/">Upgrade your browser today</a> or <a href="http://www.google.com/chromeframe/?redirect=true">Install Google Chrome</a> to better experience this site.</p>');
  }
</script>`

### CHECKLIST ###
>*Requirements:*
>
> - Must detect canvas support for 3d [done]
> - Must safely fail [done]
> - Returns true or false if webGL is supported [done]

### CONTRIB ###
>*How To Contribute:*
>
> - Clone this repo
> - Submit your changes to your cloned repo
> - Issue a PULL request
