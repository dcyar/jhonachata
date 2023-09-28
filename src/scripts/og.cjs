const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const puppeteer = require('puppeteer');

const postsDirectory = path.join(process.cwd(), 'src/content/posts');

fs.readdir(postsDirectory, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  const slugs = files
    .filter(file => {
      const filePath = path.join(postsDirectory, file);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);
      return !data.draft;
    }).map(file => {
      const filePath = path.join(postsDirectory, file);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);
      return data.slug;
    });

    slugs.forEach(async (slug) => {
      await screenshot(slug);
    });
});

const screenshot = async (slug) => {
  const browser = await puppeteer.launch({headless: 'new'});
  const page = await browser.newPage();

  await page.setViewport({ width: 1200, height: 630 });
  await page.goto(`https://jhonachata.dev/og/${slug}/`, { waitUntil: 'networkidle0' });
  
  try {
    fs.statSync(`public/images/og`);
  } catch (err) {
    fs.mkdirSync(`public/images/og`);
  }

  await page.screenshot({ path: `public/images/og/${slug}.png` });
  await browser.close();
}