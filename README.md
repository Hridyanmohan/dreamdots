# Dreamdots by Hrid — Ocean Blue static website

A redesigned, collection-led art and craft website using ocean blue, dreamy light blue, white and raspberry rose accents. Your supplied horizontal raspberry logo is used unchanged in the header and footer. Supplied photographs and raster illustrations replace the earlier SVG placeholders.

## Run in VS Code

1. Extract this ZIP into a new folder so it does not mix with the earlier version.
2. In VS Code choose File → Open Folder, then choose the extracted folder.
3. Open `index.html` with your installed Live Server extension (right-click → Open with Live Server).
4. Edit a file and save with Ctrl+S to refresh your preview.

You can also double-click `index.html` to open it directly. No Node.js, npm, build step, database or installation is required by the website. Clipboard access may be unavailable when opening a local file; the Copy message button then selects the text for manual copying.

## Files to edit

| File | What to change |
| --- | --- |
| `index.html` | All copy, collection cards, images, Instagram links, your introduction and FAQs |
| `styles.css` | Colours, layout, spacing, typography and responsive design |
| `script.js` | Search, filters, menu and product popups |
| `images/` | Logo, photos and supplied illustrations |

The original previous-site screenshot is treated as a reference, not displayed on the website. The earlier collection images and your latest supplied portrait, banner, artwork and symbols are included. Product images remain raster files. Social and contact symbols are small inline SVG interface icons; no external icon service is required.

## Brand colours

At the top of `styles.css`:

- Ocean blue: `#126b95`
- Deep blue: `#164561`
- Dream blue: `#dff1f9`
- Very pale blue: `#f3f9fc`
- Raspberry rose: `#c32c62`
- White: `#ffffff`

The website uses system fonts, local images and no required external services. It follows the collection-browsing approach of your reference site with its own Dreamdots layout, content and palette.

## Your images

| Website filename | Supplied image |
| --- | --- |
| `images/logo.png` | IMG_4276.PNG, horizontal Dreamdots logo |
| `images/crochet-charms.jpg` | 11.48.26 — crochet keychains |
| `images/journal.jpg` | 11.48.28 — journal photograph |
| `images/happy-mail.jpg` | 11.48.32 (1) — illustrated person carrying a letter |
| `images/journal-doodle.jpg` | 11.48.32 — pink illustrated journal |
| `images/picnic.jpg` | 11.48.33 (1) — picnic illustration |
| `images/paper-keepsakes.jpg` | 11.48.33 — pink envelope illustration |
| `images/dreamer.jpg` | 11.48.34 (1) — blue book/dream illustration |
| `images/flowers.jpg` | 11.48.35 — floral bouquet illustration |
| `images/creative-studio.jpg` | 11.48.36 — painting illustration |
| `images/embroidery.jpg` | 11.48.37 — embroidery illustration |
| `images/ocean-dreams.jpg` | 11.48.38 — ocean stars illustration |

All provided images are copied unchanged. Some category cards use mood illustrations because finished-product photos were not supplied for those categories. They are described as collection previews. Existing text and signatures within the supplied images remain intact.

To replace a picture, put the new image in `images/`, then update its `src` in `index.html`, for example:

```html
<img src="images/my-new-journal.jpg" alt="My handmade blue journal" loading="lazy">
```

Use lowercase filenames without spaces. Always use relative paths such as `images/photo.jpg`, with no leading slash, so GitHub project URLs work correctly.

## Edit or add a collection card

Each card is an `<article class="product">` in `index.html`.

- Change `data-category` to an existing exact category name.
- Change `data-description` for the popup text.
- Update the image `src` and `alt`.
- Change the `<h3>` title.
- Duplicate the whole article to add a new card, or remove the article to remove it.

Search reads the card text and its description. Filters use the `data-category` value. To add a category, also add a filter button with a matching `data-filter` value. Category thumbnail links use matching `data-category-link` values.

Current categories: Journals, Crochet, Paper embroidery, Cloth embroidery, Pipe-cleaner crafts, Frames, Cute handmade gifts.

The site uses “Enquire for price” rather than made-up prices. Change this link text if you later want to display a confirmed price.

## About Hridya

The maker section says “Hello, I’m Hrid.” and contains the line:
“Kozhikode, India”.

Edit this directly in `index.html`. Both supplied new portraits are displayed in full colour.

## Publish on GitHub Pages

1. Upload the extracted contents to your GitHub repository. `index.html` must sit in the repository root beside `styles.css`, `script.js` and the `images` folder.
2. Commit to `main`.
3. Open Settings → Pages.
4. Select Deploy from a branch → main → /(root) → Save.
5. Open the published link once GitHub completes deployment.

Upload the actual files, not just the ZIP. `.nojekyll` is included. Your site has not been uploaded or deployed by this delivery.

Official GitHub instructions:
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## What the static version does

- Responsive collection browsing, category navigation and search.
- Product detail popups with copyable Instagram enquiry messages.
- Contact links to `https://www.instagram.com/dreamdotsbyhrid/`.
- All content visible in the source HTML; core content and Instagram links work without JavaScript.

There is no account, owner dashboard, database, cart checkout, payment collection or automatic enquiry submission. Visitors send enquiries themselves in Instagram. No customer information is collected or stored by this website. It does not use tracking cookies or external analytics.

## Verification

JavaScript syntax, every local image/file reference, unique element IDs, navigation anchors and category/filter matching have been checked. Search and category filtering were checked with a small DOM test harness. Browser layout was not visually verified in this environment. Preview on your desktop and phone before publishing.


## Latest update — social links and new images

Five channels use icon-only links in horizontal rows, with platform colours and accessible labels:

- Instagram: https://www.instagram.com/dreamdotsbyhrid/
- YouTube: https://www.youtube.com/@dreamdotsbyhrid
- Pinterest: https://www.pinterest.com/dreamdotsbyhrid/
- Email: mailto:dreamdotsbyhrid@gmail.com
- WhatsApp: https://wa.me/918848086183 (India +91)

These destinations are based on your supplied links, handles and phone number. Social profiles were not independently verified. Clicking a link opens the platform or email app; it does not automatically send anything.

New images: `hrid-portrait.png` (maker photo), `creative-camera.jpg` (maker illustration), `gratitude-journal.jpg` (journal card and banner), `brand-banner.jpg` (social section), `creative-world.jpg` (custom gifts), `dreamdots-poster.png` (gift card), `night-ocean.jpg` (sign-off background), `white-symbol.png` (sign-off mark), `black-symbol.png` (favicon). All nine uploads are included unchanged.

This is a complete updated package. Extract into a new folder to preview, or back up your existing local edits before replacing `index.html`, `styles.css`, `script.js` and adding the new images. The project remains static and GitHub Pages compatible.

## Latest revision
Both maker portraits replaced with `hrid-yellow.jpg` and `hrid-rose.jpg`, in colour. Added Bouquets & hampers and Celebration return gifts categories. The supplied bouquet and sunflower images are inspiration references; their originals are kept unchanged. A hamper uses an existing illustration until a finished-product photo is available. Social links show icons only, including the top bar; the banner and ocean art remain unchanged.

## Current layout revision
Icons use ocean blue. Compact icon rows remain on one line. The contact section restores labelled cards and handles, without Behance. The category strip contains the original seven categories on one row (scroll horizontally on small screens); bouquets, hampers and return gifts remain in the product collection and filters. All product cards have Instagram “Enquire for price” links. The small maker image is now `images/creative-desk.jpg`; the main portrait stays in colour.

## Latest image and contact update
Updated the hamper, rose bouquet, sunflower gift and brand banner using the latest supplied files. Added crochet bouquet and floral headscarf cards (13 collection ideas total). The five contact cards remain on one horizontal row; on smaller screens, scroll sideways to see them all. Handle and email text do not wrap. Original supplied photographs and watermarks are retained.

## Latest update
The ocean gift artwork fills its card using proportional cover cropping, without side bars. The maker subtitle is now Kozhikode, India. Worldwide shipping is shown in the promise strip and footer.
