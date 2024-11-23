var gdjs;(function(p){let T;(function(u){const s=new p.Logger("Tilemap object");class M{constructor(e){this._instanceContainer=e,this._manager=new TileMapHelper.TileMapManager}static getManager(e){return e.tileMapCollisionMaskManager||(e.tileMapCollisionMaskManager=new M(e)),e.tileMapCollisionMaskManager}getOrLoadTileMap(e,t,i,r){this._manager.getOrLoadTileMap(this._loadTileMap.bind(this),e,t,i,pako,r)}getOrLoadSimpleTileMap(e,t,i,r,n,a){this._manager.getOrLoadSimpleTileMap(e,t,i,r,n,a)}getOrLoadTextureCache(e,t,i,r,n,a){this._manager.getOrLoadTextureCache(this._loadTileMap.bind(this),e,t,i,r,n,a)}getOrLoadSimpleTileMapTextureCache(e,t,i,r,n,a,l){try{this._manager.getOrLoadSimpleTileMapTextureCache(e,t,i,r,n,a)}catch(o){l(o)}}_loadTileMap(e,t,i){this._instanceContainer.getGame().getJsonManager().loadJson(e,(r,n)=>{if(r){s.error("An error happened while loading a Tilemap JSON data:",r),i(null);return}const a=TileMapHelper.TileMapManager.identify(n);if(!a){i(null);return}a.kind==="tiled"&&t?this._instanceContainer.getGame().getJsonManager().loadJson(t,(l,o)=>{if(l){s.error("An error happened while loading Tileset JSON data:",l),i(null);return}const g=a.data,d=o;d.firstgid=g.tilesets[0].firstgid,g.tilesets=[d],i(a)}):i(a)})}}u.TileMapRuntimeManager=M})(T=p.TileMap||(p.TileMap={}))})(gdjs||(gdjs={}));
//# sourceMappingURL=TileMapRuntimeManager.js.map
