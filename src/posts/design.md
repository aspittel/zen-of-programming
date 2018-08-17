I will preface this by saying that I'm not professionally a designer. That being said, I like building pretty things. A lot of developers seem overwhelmed by design, so I wanted to do a quick write-up with visual examples with quick tips on how to improve the visuals of your site.

## Color

I really enjoy playing with color on my websites, but there needs to be a balance and a coordinated color scheme throughout. It's important that these colors don't clash, that they have a good level of contrast, and that they are consistent.

### Consistency


For example, here's my color scheme for [The Zen of Programming](https://the-zen-of-programming.com):

![](/design/colors.png)

I use the same shade of green for some of my backgrounds, headers, and buttons. The grey uses the same hex code throughout as well.

You can use CSS variables to make sure that your colors are the same throughout your code.

```css
body {
  --pink: #CF92B7;
  --green: #59876B;
  --grey: #4A4A4A;
}

h1 {
  color: var(--pink);
}
```

If you are using SCSS or another CSS preprocessor, this may be even easier!

As far as the number of colors involved in your theme, four is usually a good bet. Maybe make two of these colors neutrals (like black, white, or grey) and two bolder pops of color. Monochromatic color schemes can definitely work as well though!

When I work with rainbow color schemes, I treat the rainbow as one color and then use two neutrals for everything else.

### Clashing

It's also important to make sure your colors look good together and don't clash. Normally, the colors opposite to each other on the color wheel clash. Of course, you can make awesome websites that utilize clashing colors, but it is more difficult and may be better left to designers. Some examples would be red and green or orange and purple.

In addition, keep the tones of the colors in mind -- if you are using a cool toned pink, a cool toned green may be good to pair with it instead of a warm-toned green. Warm toned colors normally have more red undertones, and cool toned colors normally have more blues.

### Contrast

Make sure there's contrast between the colors on your website. If there isn't, it will be much more difficult to read your content. [Here's](https://webaim.org/resources/contrastchecker/) an awesome site that will check your contrast for you. Lighthouse testing will also check this for you! In general, put light colors on top of dark ones, and dark colors on top of light ones!

![](/design/contrast.png)

### Color Meaning

If you are working on a website for a brand, different colors have different [implicit meanings](https://graf1x.com/color-psychology-emotion-meaning-poster/) to readers, so it can be helpful to keep those in mind.

## Text

Usually, the text will be one of the most important parts of your site. You need it to be readable and to draw attention to the most important parts of your content.

![](/design/)

### Spacing

### Readible fonts

### 

### Fonts

### Sizing


## Backgrounds
