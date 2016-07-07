import { Component, Input, OnInit, ElementRef} from '@angular/core';
var Glyphs = {};
var req = require.context("./icons", false, /\.svg$/);
req.keys().forEach(function(file: string) {
  var id = req(file);
  var name = /^\.\/(.*)\.svg$/.exec(file)[1];
  if (name) {
    Glyphs[name] = id;
  }
});

@Component({
  selector: 'lnk-icon',
  template: "",
  directives: [],
  providers: [],
  pipes: []
})
export class IconComponent implements OnInit {

  @Input("glyph")
  private glyph: string;

  constructor(private element: ElementRef) {
  }

  ngOnInit() {
    var svgns = "http://www.w3.org/2000/svg";
    var xlinkns = "http://www.w3.org/1999/xlink";
    var svg = document.createElementNS(svgns, "svg");
    svg.setAttribute("height","500");
    svg.setAttribute("width","500");
    var use = document.createElementNS(svgns, "use");
    use.setAttributeNS(xlinkns,"href",Glyphs[this.glyph]);
    svg.appendChild(use);
    this.element.nativeElement.appendChild(svg);
  }

}
