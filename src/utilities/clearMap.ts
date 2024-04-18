import type { Map } from 'maptalks'

export function clearMap(map: Map, exclude: string) {
  map.getLayers().forEach((layer) => {
    if (layer.getId() !== exclude) {
      map.removeLayer(layer);
    }
  });
}