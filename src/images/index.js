import BATLMocks from "./batl/batl.png";
import BATLHome from "./batl/batl-hero.png";
import BATLThumbnail from "./batl/batl-thumbnail.png";
import ContentModel from "./batl/content-model.png";
import GreenHouse from "./greenhouse/greenhouse.png";
import GreenHouseHome from "./greenhouse/home.png";
import Sketch from "./greenhouse/sketch.png";
import Sitemap from "./greenhouse/sitemap.png";
import GreenHouseThumbnail from "./greenhouse/greenhouse-thumbnail.png";
import TypeSystem from "./greenhouse/type-system.png";
import Spot from "./spot/er-diagram.png";
import SpotThumbnail from "./spot/spot-thumbnail.png";
import GoogleDoodleThumbnail from "./google-doodle/google-doodle-thumbnail.png";
import GoogleDoodleHome from "./google-doodle/google-doodle-home.png";

const images = {
  batl: {
    thumbnail: BATLThumbnail,
    hero: BATLMocks,
    contentModel: ContentModel,
    home: BATLHome,
  },
  greenhouse: {
    thumbnail: GreenHouseThumbnail,
    hero: GreenHouse,
    sketch: Sketch,
    sitemap: Sitemap,
    typeSystem: TypeSystem,
    home: GreenHouseHome,
  },
  spot: {
    thumbnail: SpotThumbnail,
    hero: Spot,
  },
  googleDoodle: {
    thumbnail: GoogleDoodleThumbnail,
    hero: GoogleDoodleHome,
  },
};

export default images;
