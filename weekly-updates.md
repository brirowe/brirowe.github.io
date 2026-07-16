# Course Project Blog

## Week 2 Update

This week, I created my personal GitHub account and started setting up the website. I set up a couple of basic sections for the site, but I’m mainly spending a lot of time this week trying to finalize my project proposal and think through my ideas more.

Right now, I’m leaning toward making a Lego photography website. I want to explain more of what I can do with this idea, but part of it is that I want to learn how to create something more visual and creative for something not related to work/research.

## Week 3 Update

This week I focused on building out my personal website where I added multiple tabs using individual html files, added a style aesthetic, and began filling in some of the content about my education, contact links, etc. Working with html is pretty new to me so I looked up how to create the multiple tabs, apply a style, and create different sections and subheadings within each tab, I used some AI tools to search these features and figure out some different aesthetic options. 

Additionally, I finalized the proposal for my semester project which will focus on building an interactive site for my Lego photography side gig/hobby. For the first step of my project, I exported all of the photos I've posted on the business instagram account and plan to organize those photos next week to then associated each photo with the locations I took them (these images to not have location metadata as I took them on my Canon camera with location turned off). Next week I also plan to start creating the outline for the GitHub website, using some of the same features I used to set this one up.

I know the personal website rubric said to include these updates in the website but I prefer to keep it separate as I may want to use this website before this course is over and don't want all of these updates included in the content. 


## Week 4 Update

**What did you do last week?**  
  Last week I downloaded all of my Lego photos from my social media account, outlined my personal website, created a repository form my Lego website, and finalized my project proposal.
  
**What do you plan to do this week?**  
  This week I'm creating the outline for the Lego website, adding tabs for the interactive map, palettes, mosaic patterns, minifig archive, and a shop option. I'm also working on filling in the content for some of my personal website sections such as my research page, contact information, and updating my CV. Lastly, I plan to work on adding content to the home page of my Lego site.
  
**Are there any impediments in your way?**  
  Since CSS and HTML are so new to me, making it hard for me to know how to arrange a lot of the visual features. I'm trying to just focus on content right now rather than a polished appearance, but I do reant to spend some time making both my websites more personalized and visually appealing to show my creative skills. I've been looking up some CSS resources but there seems to be an overwhelming amount of info online. Therefore, for now I'm going to just fill in content and work on the appearance around week 6 or 7.
  
**Reflection on the process you used last week, how can you make the process work better?**  
  As I said above, I just need to focus on content for now then visual features later. Also, I plan on looking up some more information on how to use the leaflet software for outlining how I'm going to build my interactive map.


## Week 5 Update

**What did you do last week?**  
This past week I worked on finalizing content for my personal website and kept building out the structure of my Lego website. After talking with my brother-in-law, who’s a data scientist, I decided to move away from using individual HTML files because it felt tedious and hard to manage. Instead, I started using Jekyll themes with markdown files, which made both websites easier to edit and helped with the visual layout without having to write much CSS. I also downloaded all of my Lego photos, removed duplicates and non-Lego photos, uploaded them into Jupyter, and started creating a photo data structure with file names, titles, locations, latitude, and longitude.

**What do you plan to do this week?**  
This week I’ll keep filling in the photo data structure and start using it to build the Leaflet map. Since my photos don’t have location metadata, I’ll need to manually add the general locations and coordinates. I’ll also keep adding content to the Lego website, especially the homepage.

**Are there any impediments in your way?**  
Jekyll, HTML, and CSS are still new to me, so figuring out how they all work together has taken some trial and error along with help from Claude/chatgpt. Another issue is that the photo locations have to be added manually, which will be a little tedious, but also a fun creative part of organizing the project.

**Reflection on the process you used last week, how can you make the process work better?**  
This week helped me realize that using the right tools like Jekyll makes the project feel a lot more manageable. Switching to Jekyll themes and markdown made it easier to focus on the content and structure instead of getting stuck on every visual detail. Going forward, I’ll break the Leaflet map into smaller steps and start with just a few photos before trying to map everything.


## Week 6 Update

**What did you do last week?**  
This past week I completed one of the most tedious parts of this project... manually documenting the locations of my 300+ lego photos as my canon camera does not have location metadata for any of the photos I've taken. Although this was tedious it was really fun to be able to remember of all of the cool places I've taking lego photos (from Colorado to Japan and Mexico). This also allowed be to clean the photo folder to flag any duplicate photos or images that I didn't think were quality enough for the website. I used my jupyter notebook to remove these photo files and create more information columns for the photos such as Minifig Theme and season.

**What do you plan to do this week?**  
This week and next I will work on finalizing the information for the photos to then create a leaflet map with simple markers for all the photos. If I have time then I'll work on figuring out how to create thumbnail photos of all of my images for the interactive map. 

**Are there any impediments in your way?**  
Learning how to use leaflet will be the biggest learning curve, but with resources like Claude, geeksforgeeks, etc. I know I can figure it out. I think first I'll start with just 5-10 photos to try to get the basic structure and formatting to work then add more photos later. Also will look to see how this can integrate with a GitHub page.

**Reflection on the process you used last week, how can you make the process work better?**  
Note to self... take iphone images whenever I take lego pics on my camera so that I have the location metadata and don't have to do the location identification manually haha!


## Week 7 Update

**What did you do last week?**  
This past week I finalized adding all of the coordinate points for my Lego photos and added themes for each photo from a selected list that I created. After that, I started figuring out how to use Leaflet for the interactive map. With the help of Claude, I was able to integrate Leaflet into my GitHub page and include all of my photos using the default map and default pins.

I went through a couple rounds of edits and eventually figured out how to add thumbnail photos when you click on a pin. I was also able to make it so that when you click on the smaller thumbnail, the photo opens much larger on the screen, which I like the look of. Since I’m using a Jekyll template, the overall aesthetics are okay right now, and I’m happy with the progress since this felt like one of the bigger tasks for the project.

**What do you plan to do this week?**  
This week and next I plan to start working on the palettes page. My goal is to write code that pulls out the top like 5-10 most common colors from each photo and then use that information to create color palettes (a mix of sequential, diverging, etc.). I also want to start building out the actual palettes page on the website so that the color information is displayed in a more visual and organized way.

If I have time I'd also like to keep exploring different map ideas like using custom pins or maybe even small Lego heads as markers instead of the default Leaflet pins. I’m not totally sure how to do that yet, so I’ll need to look into it more.

**Are there any impediments in your way?**  
One issue I’m still running into is the appearance of the photo thumbnails in Leaflet. Right now, there is a white border around the thumbnail photos that I’m not happy with, but I can’t quite figure out how to remove or override it. I think Leaflet has some built-in display functions that are affecting the popup style, so I need to figure out how to customize those more.

Another challenge is trying not to get too hung up on the aesthetics. I want the website to look creative and personalized, but I don’t want to spend too much time fixing small visual details before the main content and features are working. I also need to eventually figure out how to connect the different pages better, so that someone could click on a photo from the map and then also view its color palette or other related information on another page.

**Reflection on the process you used last week, how can you make the process work better?**  
Breaking the project into smaller steps worked well, starting simple with the default Leaflet map and gradually adding features. I also need to better balance function and aesthetics by focusing on core features first and refining design later. Overall, getting the map working was a big step.
  

## Week 8 Update

**What did you do last week?**  
This past week I worked on formatting the interactive map to better fit the mobile version and figuring out why there were some weird resizing issues. With the help of Claude, I was able to figure out an issue between the Jekyll theme and the CSS files (something I don't fully understand yet, but it's been a great introduction to website design). My main focus this week, though, was creating color palettes from all of my photos. I used a prebuilt library called ColorThief to pull out dominant colors, choosing 8 colors per photo since that felt like a good number for statistics, art designs, and other uses like mosaics. I then figured out how to display these palettes on the palettes page of the website.

**What do you plan to do this week?**  
I want to refine two main areas this week. First, on the map I'm running into an issue where photos taken at the same coordinate point only show one photo instead of all of them, so I need to figure out how to let users scroll through multiple photos at a single pin location. I also need to figure out why my Japan photos aren't showing up on the mobile version of the map, even though the map itself is scrollable. Second, on the palettes page I don't love the current ordering of the colors, so I want to create three different palette options like sequential, diverging, and qualitative/categorical to give different ways of viewing and using the color data.

**Are there any impediments in your way?**  
The mismatched photo/coordinate display on the map and the Japan photos not loading on mobile are the two current blockers. I'm also still working through my limited CSS/Jekyll knowledge, which is slowing down some of the formatting fixes.

**Reflection on the process you used last week, how can you make the process work better?**  
I'm still working on not focusing too heavily on aesthetics. Going forward, I think each week I'll try to balance a formatting/design task with a development task, so I keep making progress on core features while still improving the look and feel along the way.
  


## Week 9 Update

**What did you do last week?**
This past week I mainly focused on fixing and adding features to the interactive map. I fixed the issue where Japan was not showing up on the mobile or web version, which ended up being caused by the map size limits. I also added marker clustering through Leaflet, so when users are zoomed out they can see how many photos I have in different areas, and then zoom in to view the individual locations. I also got the carousel working so multiple photos taken at the same location can be viewed together, basically grouped photos by coordinate points then added a popup feature to the marker for that point so people can scroll left and right.

My other main focus was uploading photos of the LEGO mosaics I've done. I added links to the Instagram posts where I show the building process for most of the newer wones. This took some time because I had to manually organize the photos, titles, and links, but I like how it turned out and how it connects my website and Instagram.

**What do you plan to do this week?**
This next week I want to clean up the palettes page. Right now the code pulls the 8 most common colors, but it sometimes misses smaller, vibrant colors that stand out in the photo. I want to test ways to better capture those colors, possibly by focusing more on the center of the image where the minifig usually is or by searching for contrasting colors to the most common ones. I also want to organize the palettes in a more sequential format.

Then I want to start outlining the minifig archive by creating an Excel sheet with the minifig theme and the set each figure came from (of the ones that are actually from a set and not my custom builds). Eventually, I want to connect this information to the map and add filters so users can view photos by theme, elevation, or other categories.

**Are there any impediments in your way?**
Formatting is still the biggest challenge, especially getting everything to display correctly on both desktop and mobile. The Jekyll theme has helped a lot with setting up the website, but some of the pre-made settings can be difficult to work around. Leaflet also has some limitations that make certain features and formatting more complicated.

**Reflection on the process you used last week, how can you make the process work better?**
Going forward, I want to keep focusing on one formatting problem and one functional or logistical next step each week. I think this will help me keep making progress without getting too stuck on one part of the website.
