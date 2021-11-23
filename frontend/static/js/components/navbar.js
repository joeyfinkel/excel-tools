const createNavbar = (
  logoURL,
  itemTemplateURL,
  imageTemplateURL,
  sheetMergerURl
) =>
  `<div class="top">
        <img src="${logoURL}" alt="" />
    </div>
    <div class='buttons'>
        <a href="${itemTemplateURL}" class='btn btn-nav'>Item Template</a>
        <a href="${imageTemplateURL}" class="btn btn-nav">Image Template</a>
        <a href="${sheetMergerURl}" class="btn btn-nav">Sheet Merger</a>
    </div>`;

export const checkPage = (URL) => {
  switch (URL) {
    case URL.includes('index.html'):
      return createNavbar('Logo.png', 'Pages/ItemTemplate/itemTemplate.html');
    case URL.includes('Pages/ItemTemplate/itemTemplate.html'):
      return createNavbar(
        '../../Logo.png',
        '#',
        '../ImageTemplate/imageTemplate.html',
        '../SheetMerger/sheetMerger.html'
      );
    case URL.includes('Pages/ImageTemplate/imageTemplate.html'):
      return createNavbar(
        '../../Logo.png',
        '../ItemTemplate/itemTemplate.html',
        '#',
        '../SheetMerger/sheetMerger.html'
      );
    case URL.includes('Pages/ImageTemplate/imageTemplate.html'):
      return createNavbar(
        '../../Logo.png',
        '../ItemTemplate/itemTemplate.html',
        '../ImageTemplate/imageTemplate.html',
        '#'
      );
  }
};

/**
 * Navbar component
 */
export const navbar = `
                        <div class="top">
                            <img src="../../Logo.png" alt="" />
                        </div>
                        <div class='buttons'>
                            <a href="Pages/ItemTemplate/itemTemplate.html" class='btn btn-nav'>Item Template</a>
                            <a href="#" class="btn btn-nav">Image Template</a>
                            <a href="#" class="btn btn-nav">Sheet Merger</a>
                        </div>
                    `;
