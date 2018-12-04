# teraspora.net website

## Overview

I have a passion for mathematics and for coding, and I love using mathematics and coding to create art.

I had been intending to build this website for the past couple of years but did not have the necessary CSS skills.   The Code Institute course put me on the right track with a structure for learning, and finally I have been able to build it.

The original aim was just to be able to present to the world some of the interesting and sometimes stunning images I have produced with a Java program I have been developing for several years.   A secondary aim was to be able to offer some of these images for sale in material form, as in posters, prints, T-shirts etc.

As I gained coding experience realised that in order to get work as a developer I needed to have a portal to show my coding skills and offer my services, so this became a third aim.   Finally, dicovering fragment shader coding for the GPU gave me a new passion, and I am delighted to be able to show off some of the shaders I have built as embedded iframes.

## UX

### User stories:

- User 1: ...is interested in exploring for aesthetic reasons.
	- Intended UX:  a smooth and delightful journey into the art and animations without unwanted excess technical information or glitches. The user should be able to one into the art and ignore the tech stuff.

- User 2: ...is interested in buying or using my art in some way.
	- Intended UX:  as above, but also it should be easy for the user to contact me.

- User 3: ... is interested in getting a website built, has a programming need, or is considering interviewing me as a candidate for a job.
	- Intended UX:  the website should demonstrate my technical skills by operating smoothly.   It should be easy to find information about me.   The site should conform to accepted standards overall and exhibit expected behaviour, such as social media icons dwelling in a footer and linking as expected.   The code should be well-structured and clean with good indentation and use of white space, not minified or obfuscated.   The site and associated resources should load fast.

## Features

- A Home page with a short article and some images and/or media, and links to other pages
- A Coding page linking to articles I have written about coding, maths and the digital world in general
- Separate pages for each of the articles
- A Food page where I blog about growing and cooking food
- A Music page with links to or embedded videos or audio files of my playing
- An About page where I present a personal resume, info about the site, and contact info
- An Art page displaying  some of my fractal images.

## Features left to implement

- Online shop for prints of the fractal images
- Smooth integration with my Digital Art Workshop, which forms the substance of my second Code Institute project
- Tutorials where I share some of the experience I have gained with coding, and with software development in general.
- Continue displaying an image until another has fully downloaded, to give a better UX for users on slow connections.

## Design Decisions

- I decided to go with the classic format of header with navigation, footer with social media links, and two panels in between, divided in the ratio 2:1 on larger screens in landscape mode, and stacked vertically on smaller screens in portrait mode.
- I used the same basic format for every page in order to create consistency and predictability in the UX.
- I opted for a dark background with lighter text (a) as a way of making it "stand out from the pack" and (b) because I like the combination of yellow/orange on dark blue.   That's how I configure Bash!
- I chose to make all external links open in a new tab so as not to lose the user.
- I chose to make the navigation links expand a little and change colour when hovered upon, so as to encourage the user to explore my site.
- I ensured that there is never any need for the user to use the "Back" button.

## Technologies Used

<p>The site was lovingly crafted by hand, using raw semantic HTML5 and CSS3, with just an iota of Javascript on the Gallery page to switch images randomly.
	I did not use any preprocessors like Sass or HAML, or CSS libraries like Bootstrap, as I felt I first needed to learn the nuts and bolts, particularly of CSS.   The only external resources used are Google Fonts (for <a target="_blank" href="https://fonts.google.com/specimen/Mali">Mali</a> and <a target="_blank" href="https://fonts.google.com/specimen/Rubik">Rubik</a>), Font Awesome for social media icons, and embedded iframes from Youtube and Shadertoy, which is all my own content in the form of fractal videos and shader programs I've created myself.</p>
<p>
	All the images are mine.   The photographs were taken with my Nikon Coolpix P500 digital SLR camera, and the fractal images were generated my Java escape-time fractal program.   I use <a target="_blank" href="https://www.imagemagick.org/script/index.php">ImageMagick</a> to resize them where necessary, or occasionally <a target="_blank" href="https://www.gimp.org/">GIMP</a>.   I used <a target="_blank" href="https://tinypng.com/">Tinypng</a> to compress them as they were taking too long to download.</p>
	<p>
	I produced the videos from the same program.   By iterating the Julia sets of compositions of complex trigonometric functions and varying the constant, I produce image sequences.   I add title sequences with another Java program of mine, and then pass them to <a target="_blank" href="https://imagej.nih.gov/ij/">ImageJ</a> to turn into an <code>.avi</code> video, then through <a target="_blank" href="https://www.videolan.org/vlc/index.html">VLC Player</a> to compress to a more manageable <code>.mp4</code> file, ready for uploading to Youtube.
	</p>
<p>
	I wrote the articles in Markdown and used a web service like <a target="_blank" href="https://markdowntohtml.com/">https://markdowntohtml.com/</a> to convert to HTML, then edited the HTML if necessary. For version control I used Git on my local machine. For vendor-specific prefixes I used <a href="https://autoprefixer.github.io/">Autoprefixer CSS online</a>.</p>
<p>
	I used CSS Grid to lay out the content.  I experimented by building dummy pages while watching Rachel Andrew's and Wes Bos's tutorials.   Together with using viewport units, CSS Grid seems to make it easier to make the site responsive and to make elements behave themselves when the user resizes the viewport.
</p>
<p>
	I used <a href="http://www.sublimetext.com/">Sublime Text 3</a> in dual-pane mode to code it on my local machine, with the editor on the laptop screen and the site displaying in a browser window on an external monitor, using <code>Ctrl+s Alt+Tab F5</code> to see a refreshed page in the browser.
<p>I used a quad-core Asus laptop with 8GB RAM, running Xubuntu 18.04 for all my development.</p>

## Testing

It was tested continually as I developed it, in Firefox Developer Edition v.6? (64-bit) and Chromium vv.69 & 70, using both Firefox and Chromium developer tools, and nearing the conclusion of the project also on other physical devices.

I used responsive mode in the dev tools and resizing the viewport to find unwanted behaviour so as to correct it.   I also periodically checked the appearance on both my phone and tablet (both Android) in Chrome and Dolphin browsers.

### To do
- I have not yet tested it in Opera, Safari, any text-based browser, or any Apple device.
- My weakest area in web design in positioning elements correctly.   At present the Shadertoy icon does not adjust its size when the viewport is scaled down.
- I will probably change the navbar to be a subgrid instead of floating elements.   

## Deployment

I pushed my local git repo of code, images and media to a Github repository, and enabled Github Pages for it.   There is only one branch, master. URL of Home Page is <a href="https://teraspora.github.io/ts-website/index.html">here</a>.

## Acknowledgements

<p>I have availed of many resources around the web to help me learn.   The following is far from a complete list, but it covers those which were most important for me.</p>
<ul>
<li><a target="_blank" href="https://stackoverflow.com/users/5656369/john">Stack Overflow</a> </li>
<li><a target="_blank" href="https://www.w3schools.com/">W3schools</a> </li>
<li><a target="_blank" href="https://css-tricks.com/">CSS_TRICKS</a> </li>
<li><a target="_blank" href="https://developer.mozilla.org/en-US/">Mozilla Developer Network</a> </li>
<li><a target="_blank" href="https://www.rachelandrew.co.uk/">Rachel Andrew&#39;s tutorials</a>, and in particular her</li>
<li><a target="_blank" href="https://gridbyexample.com/">CSS Grid tutorial series</a> </li>
<li><a target="_blank" href="https://wesbos.com/javascript30/">Wes Bos&#39;s Javascript 30 tutorial series</a> </li>
<li><a target="_blank" href="https://www.leveluptutorials.com/tutorials/tag/css">Scott Tolinkski&#39;s CSS tutorials</a> </li>
<li>The code-institute-room at <a target="_blank" href="https://slack.com/">Slack</a>, </li>
<li>and finally, on old-fashioned paper, a very good 1080-page book by David Flanagan, called <span class="book-title">&quot;Javascript: The Definitive Guide&quot;</span>.</li>
</ul>
<p>
	Also important in my software dev journey have been my former maths teacher at school, Dave Bennett, who first kindled my interest in coding and had us punching holes in cards to create Fortran programs which we would send by post to Imperial College in London for processing; and another former teacher, Ed O'Reilly, who (while the world's financial system was collapsing) taught me Visual Basic .NET, Java and the fundamentals of software testing at the FAS Centre in Bishopstown, Cork, gave me an understanding of OOP and helped me get qualified as a Microsoft Certified Professional and a Sun Certified Java Programmer. 
</p>
<p>
	Finally, I must acknowledge the very positive reaction to my fractal images and movies from many friends, without which I probably wouldn't have been motivated to build this site.
</p>


