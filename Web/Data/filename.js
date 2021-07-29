export default class Filename {
  constructor(file) {
    this.file = file;
  }

  getFilename() {
    return this.file.substring(
      this.file.lastIndexOf('/') + 1,
      this.file.lastIndexOf(':')
    );
  }

  showFilename(output) {
    output.innerHTML += `File chosen: ${this.getFilename()}<br/>`;
  }
}
