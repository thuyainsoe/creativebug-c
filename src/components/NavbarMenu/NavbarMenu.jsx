import style from "./style.module.scss";
const navLinks = [
  {
    id: 1,
    name: "Classes",
    childLinks: [
      {
        id: 1,
        name: "Art + Design",
        subChildLinks: [
          { id: 1, name: "BrushCraft" },
          { id: 2, name: "PaletteMix" },
          { id: 3, name: "InkSplash" },
          { id: 4, name: "PixelArt" },
          { id: 5, name: "SketchJoy" },
          { id: 6, name: "CanvasLite" },
          { id: 7, name: "ArtFlow" },
          { id: 8, name: "DoodleDash" },
          { id: 9, name: "VividDraw" },
          { id: 10, name: "QuickArt" },
          { id: 11, name: "EaselSnap" },
          { id: 12, name: "QuirkArt" },
        ],
      },
      {
        id: 2,
        name: "Sewing",
        subChildLinks: [
          { id: 1, name: "Craft Technology" },
          { id: 2, name: "CB Live" },
          { id: 3, name: "Ceramics" },
          { id: 4, name: "Daily Practice" },
          { id: 5, name: "Drawing & Illustration" },
          { id: 6, name: "Home Décor" },
          { id: 7, name: "Lettering" },
          { id: 8, name: "Mixed Media" },
          { id: 9, name: "Painting" },
          { id: 10, name: "Printmaking" },
          { id: 11, name: "Sketchbook Exercises" },
          { id: 12, name: "Textiles" },
        ],
      },
      {
        id: 3,
        name: "Ouilting",
        subChildLinks: [
          { id: 1, name: "Baby & Kids" },
          { id: 2, name: "Blocks" },
          { id: 3, name: "CB Live" },
          { id: 4, name: "Daily Practice" },
          { id: 5, name: "Design" },
          { id: 6, name: "Home Décor" },
          { id: 7, name: "Modern Quilts" },
          { id: 8, name: "Quilt Tops" },
          { id: 9, name: "Quilting" },
        ],
      },
      {
        id: 4,
        name: "Paper",
        subChildLinks: [
          { id: 1, name: "Craft Technology" },
          { id: 2, name: "CB Live" },
          { id: 3, name: "Ceramics" },
          { id: 4, name: "Daily Practice" },
          { id: 5, name: "Drawing & Illustration" },
          { id: 6, name: "Home Décor" },
          { id: 7, name: "Lettering" },
          { id: 8, name: "Mixed Media" },
          { id: 9, name: "Painting" },
          { id: 10, name: "Printmaking" },
          { id: 11, name: "Sketchbook Exercises" },
          { id: 12, name: "Textiles" },
        ],
      },
      {
        id: 5,
        name: "knitting",
        subChildLinks: [
          { id: 1, name: "Accessories" },
          { id: 2, name: "Baby & Kids" },
          { id: 3, name: "CB Live" },
          { id: 4, name: "Felting" },
          { id: 5, name: "Garments" },
          { id: 6, name: "Holiday & Party" },
          { id: 7, name: "Home Décor" },
          { id: 8, name: "Yarn Craft" },
        ],
      },
      {
        id: 6,
        name: "Crochet",
        subChildLinks: [
          { id: 1, name: "Accessories" },
          { id: 2, name: "Baby & Kids" },
          { id: 3, name: "CB Live" },
          { id: 4, name: "Daily Practice" },
          { id: 5, name: "Garments" },
          { id: 6, name: "Home Décor" },
          { id: 7, name: "Yarn Craft" },
        ],
      },
      {
        id: 7,
        name: "Food + Home",
        subChildLinks: [
          { id: 1, name: "Baking & Cake Decorating" },
          { id: 2, name: "Bath & Body" },
          { id: 3, name: "Canning & Preserving" },
          { id: 4, name: "CB Live" },
          { id: 5, name: "Daily Practice" },
          { id: 6, name: "Flowers" },
          { id: 7, name: "Furniture Refinishing & Upholstery" },
          { id: 8, name: "Home Decor" },
          { id: 9, name: "Packaging & Presentation" },
        ],
      },
      {
        id: 8,
        name: "Jewlry",
        subChildLinks: [
          { id: 1, name: "Beading" },
          { id: 2, name: "Bracelets" },
          { id: 3, name: "CB Live" },
          { id: 4, name: "Earrings and Rings" },
          { id: 5, name: "Kids" },
          { id: 6, name: "Leather" },
          { id: 7, name: "Metal and Wire" },
          { id: 8, name: "Necklaces" },
        ],
      },
      {
        id: 9,
        name: "Holiday + Party",
        subChildLinks: [
          { id: 1, name: "CB Live" },
          { id: 2, name: "Daily Practice" },
          { id: 3, name: "Packaging & Presentation" },
          { id: 4, name: "Parties" },
          { id: 5, name: "Weddings" },
          { id: 6, name: "Spring Celebrations" },
          { id: 7, name: "Summer Celebrations" },
          { id: 8, name: "Fall Celebrations" },
          { id: 9, name: "Winter Celebrations" },
        ],
      },
      {
        id: 10,
        name: "Kids",
        subChildLinks: [
          { id: 1, name: "5 Years and Up" },
          { id: 2, name: "8 Years and Up" },
          { id: 3, name: "CB Live" },
          { id: 4, name: "Crafts" },
          { id: 5, name: "Daily Practice" },
          { id: 6, name: "Drawing & Painting" },
          { id: 7, name: "Holiday & Party" },
          { id: 8, name: "Jewelry" },
          { id: 9, name: "Paper" },
          { id: 10, name: "Sewing" },
          { id: 11, name: "Yarn" },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Daily Practice",
    childLinks: [],
  },
  {
    id: 3,
    name: "Learning Journeys",
    childLinks: [],
  },
  {
    id: 4,
    name: "Resources",
    childLinks: [
      {
        id: 1,
        name: "Calendar",
      },
      {
        id: 2,
        name: "Instructors",
      },
      {
        id: 3,
        name: "Blog",
      },
      {
        id: 4,
        name: "CBTV",
      },
      {
        id: 5,
        name: "Pattern Library",
      },
      {
        id: 6,
        name: "Class Collections",
      },
    ],
  },
];

const NavbarMenu = () => {
  return (
    <ul className={style.menu}>
      {navLinks.map((navLink) => (
        <li key={navLink.id}>
          <a href="#" className={style.mainNavLink}>
            {navLink.name}
          </a>
          {navLink.childLinks.length > 0 && (
            <ul className={style.subMenu}>
              {navLink.childLinks.map((link) => (
                <li key={link.id}>
                  <a href="#">{link.name}</a>
                  {link?.subChildLinks?.length > 0 && (
                    <div className={style.subMenu2Container}>
                      <ul className={style.subMenu2}>
                        {link?.subChildLinks?.map((subChildLink) => (
                          <li key={subChildLink.id}>
                            <a href="#" className="font-serif">
                              {subChildLink.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavbarMenu;
