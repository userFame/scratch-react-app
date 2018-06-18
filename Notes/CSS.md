# Box Model

- Each box can have a width, height, padding, margin, border
    - all optional settings

- Content: Content: text, images, etc

- Padding: transparent area aound the content, inside of the box

- Border: goes around the padding and the content

- Margin: space between boxes

- Fill area: area that gets filled with background color or background image

- total width = right border + right padding + specified width + left padding + left border
- total height = top border + top padding + specified height + bottom padding + bottom border

NOTE: doesnt include margin

```
box-sizing: border-box
```

- this means the height and width would be defined for the entire box
    - total width =  specified width
    - total height = specified height


## block-level boxes
- elements formatted visually as blocks
- 100% of parent's width
- Vertically, one after another
- Box-model applies as showed

```
display: block

<!-- diplay: flex -->
<!-- display: list-item -->
<!-- display: table -->

use block level boxes
```

## Inline boxes ... display: inline
- Content is distributed in lines
- Occupies only content's space
- No line-breaks
- No heights and widths
- Paddings and margins only horizontal (left and right)

## Inline-block boxes ... display: inline-block
- A mix of block and inline
- Occupies only content's space
- no line-breaks
- Box-model applies as showed

## Normal flow
- Default positioning scheme;
- NOT floated;
- NOT absolutely positioned
- Elements laid out according to their source order

## Floats

- Element is removed from the normal flow
- Text and inline elements will wrap around the floated element
- The container will not adjust its height to the element
```
float: left
float: right
```

## Absolute Positioning

- Element is removed from the normal flow
- no impact on surrounding contents or elements;
- we use top, bottom, left and right to ffset the element from its relatively positioned container

```
position: absolute
position: fixed
```

## Stacking contexts (Look up again)
- whatever has the higher stack property (ex. z-index: 3) gets viewed

# Thining about the Layout

## Think, Build, Design

BEM = Block element modifier (more preferable nowadays to object oriented css)

```
.block{}
.block__element {}
.block__element -- modifier {}
```

## 7-1 Pattern for Architecting

- base/
- components/
- layout/
- pages/
- themes/
- abstracts/
- vendors/

