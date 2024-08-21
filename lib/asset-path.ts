export default class AssetPath {
  static getImagePath(path: string) {
      return "/assets/images/" + path;
  }

  static getSvgPath(path: string) {
      return "/assets/svg/" + path;
  }

  static getGifPath(path: string) {
      return "/assets/gif/" + path;
  }

  static getIconPath(path: string) {
      return "/assets/icons/" + path;
  }
}