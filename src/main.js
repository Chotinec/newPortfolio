import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/skills";
import "./scripts/preview"
import "./scripts/comments"
import "./scripts/navigation"
import "./scripts/parallax"