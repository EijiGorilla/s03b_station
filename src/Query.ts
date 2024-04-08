import {
  buildingLayer,
  floorsLayer,
  stColumnLayer,
  stFoundationLayer,
  stFramingLayer,
  wallsLayer,
  dateTable,
  genericLayer,
  roomsLayer,
  siteLayer,
  stairsLayer,
  stairsRailingLayer,
} from './layers';
import StatisticDefinition from '@arcgis/core/rest/support/StatisticDefinition';
import Query from '@arcgis/core/rest/support/Query';
import { view } from './Scene';

// Updat date
export async function dateUpdate() {
  const monthList = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const query = dateTable.createQuery();
  query.where = "project = 'SC'" + ' AND ' + "category = 'Station Structures'";

  return dateTable.queryFeatures(query).then((response: any) => {
    const stats = response.features;
    const dates = stats.map((result: any) => {
      const date = new Date(result.attributes.date);
      const year = date.getFullYear();
      const month = monthList[date.getMonth()];
      const day = date.getDate();
      const final = year < 1990 ? '' : `${month} ${day}, ${year}`;
      return final;
    });
    return dates;
  });
}

export const stationValue = 18; // FTI

export const buildingLayerCategory = [
  'St.Foundation',
  'St.Framing',
  'St.Column',
  'Columns',
  'Floors',
  'Walls',
  'Others',
  //   'GenericModel',
  //   'Rooms',
  //   'Site',
  //   'Stairs',
  //   'StairsRailing',
];

export const layerVisibleTrue = () => {
  stColumnLayer.visible = true;
  stFoundationLayer.visible = true;
  stFramingLayer.visible = true;
  floorsLayer.visible = true;
  wallsLayer.visible = true;
  genericLayer.visible = true;
  roomsLayer.visible = true;
  siteLayer.visible = true;
  stairsLayer.visible = true;
  stairsRailingLayer.visible = true;
  buildingLayer.visible = true;
};

export async function generateChartData1() {
  var total_incomp = new StatisticDefinition({
    onStatisticField: 'CASE WHEN Status = 1 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_incomp',
    statisticType: 'sum',
  });

  let query = new Query();
  query.returnGeometry = true;
  query.outFields = ['*'];
  query.where = 'Station = 18';
  query.outStatistics = [total_incomp];

  console.log(stColumnLayer);

  stColumnLayer.queryFeatures(query).then((response: any) => {
    let stats = response.features[0].attributes;
    console.log(stats.total_incomp);
  });

  const data = [
    {
      category: buildingLayerCategory[0],
      comp: 0,
      incomp: 0,
      delay: 0,
    },
    {
      category: buildingLayerCategory[1],
      comp: 0,
      incomp: 0,
      delay: 0,
    },
    {
      category: buildingLayerCategory[2],
      comp: 0,
      incomp: 0,
      delay: 0,
    },
    {
      category: buildingLayerCategory[4],
      comp: 0,
      incomp: 30,
      delay: 0,
    },
    {
      category: buildingLayerCategory[5],
      comp: 24,
      incomp: 8,
      delay: 3,
    },
    {
      category: buildingLayerCategory[6],
      comp: 34,
      incomp: 0,
      delay: 0,
    },
  ];

  return data;
}

export async function generateChartData() {
  var total_incomp = new StatisticDefinition({
    onStatisticField: 'CASE WHEN Status = 1 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_incomp',
    statisticType: 'sum',
  });

  var total_comp = new StatisticDefinition({
    onStatisticField: 'CASE WHEN Status = 4 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_comp',
    statisticType: 'sum',
  });

  var total_delay = new StatisticDefinition({
    onStatisticField: 'CASE WHEN Status = 3 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_delay',
    statisticType: 'sum',
  });

  var query = new Query();
  query.outStatistics = [total_incomp, total_comp, total_delay];

  const queryExpression = 'Station = ' + stationValue;

  stColumnLayer.definitionExpression = queryExpression;
  stFoundationLayer.definitionExpression = queryExpression;
  stFramingLayer.definitionExpression = queryExpression;
  floorsLayer.definitionExpression = queryExpression;
  wallsLayer.definitionExpression = queryExpression;
  genericLayer.definitionExpression = queryExpression;
  roomsLayer.definitionExpression = queryExpression;
  siteLayer.definitionExpression = queryExpression;
  stairsLayer.definitionExpression = queryExpression;
  stairsRailingLayer.definitionExpression = queryExpression;

  query.where = queryExpression;
  layerVisibleTrue();

  const stColumnCompile = stColumnLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const total_incomp = stats.total_incomp;
    const total_comp = stats.total_comp;
    const total_delay = stats.total_delay;
    return [total_incomp, total_comp, total_delay];
  });

  const stFoundationCompile = stFoundationLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const total_incomp = stats.total_incomp;
    const total_comp = stats.total_comp;
    const total_delay = stats.total_delay;

    return [total_incomp, total_comp, total_delay];
  });

  const stFramingCompile = stFramingLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const total_incomp = stats.total_incomp;
    const total_comp = stats.total_comp;
    const total_delay = stats.total_delay;

    return [total_incomp, total_comp, total_delay];
  });

  const floorsCompile = floorsLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const total_incomp = stats.total_incomp;
    const total_comp = stats.total_comp;
    const total_delay = stats.total_delay;

    return [total_incomp, total_comp, total_delay];
  });

  const wallsCompile = wallsLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const total_incomp = stats.total_incomp;
    const total_comp = stats.total_comp;
    const total_delay = stats.total_delay;

    return [total_incomp, total_comp, total_delay];
  });

  const genericCompile = genericLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const total_incomp = stats.total_incomp;
    const total_comp = stats.total_comp;
    const total_delay = stats.total_delay;

    return [total_incomp, total_comp, total_delay];
  });

  const roomsCompile = roomsLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const total_incomp = stats.total_incomp;
    const total_comp = stats.total_comp;
    const total_delay = stats.total_delay;

    return [total_incomp, total_comp, total_delay];
  });

  const siteCompile = siteLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const total_incomp = stats.total_incomp;
    const total_comp = stats.total_comp;
    const total_delay = stats.total_delay;

    return [total_incomp, total_comp, total_delay];
  });

  const stairsCompile = stairsLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const total_incomp = stats.total_incomp;
    const total_comp = stats.total_comp;
    const total_delay = stats.total_delay;

    return [total_incomp, total_comp, total_delay];
  });

  const stairsRailingCompile = stairsRailingLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const total_incomp = stats.total_incomp;
    const total_comp = stats.total_comp;
    const total_delay = stats.total_delay;

    return [total_incomp, total_comp, total_delay];
  });

  const stcolumn = await stColumnCompile;
  const stfoundation = await stFoundationCompile;
  const stframing = await stFramingCompile;
  const floors = await floorsCompile;
  const walls = await wallsCompile;
  const generic = await genericCompile;
  const rooms = await roomsCompile;
  const site = await siteCompile;
  const stairs = await stairsCompile;
  const stairsRailing = await stairsRailingCompile;

  const others_comp = generic[1] + rooms[1] + site[1] + stairs[1] + stairsRailing[1];
  const others_incomp = generic[0] + rooms[0] + site[0] + stairs[0] + stairsRailing[0];
  const others_delay = generic[2] + rooms[2] + site[2] + stairs[2] + stairsRailing[2];

  const data = [
    {
      category: buildingLayerCategory[0],
      comp: stfoundation[1],
      incomp: stfoundation[0],
      delay: stfoundation[2],
    },
    {
      category: buildingLayerCategory[1],
      comp: stframing[1],
      incomp: stframing[0],
      delay: stframing[2],
    },
    {
      category: buildingLayerCategory[2],
      comp: stcolumn[1],
      incomp: stcolumn[0],
      delay: stcolumn[2],
    },
    {
      category: buildingLayerCategory[4],
      comp: floors[1],
      incomp: floors[0],
      delay: floors[2],
    },
    {
      category: buildingLayerCategory[5],
      comp: walls[1],
      incomp: walls[0],
      delay: walls[2],
    },
    {
      category: buildingLayerCategory[6],
      comp: others_comp,
      incomp: others_incomp,
      delay: others_delay,
    },
  ];

  return data;
}

export async function generateTotalProgress() {
  var total_number = new StatisticDefinition({
    onStatisticField: 'Status',
    outStatisticFieldName: 'total_number',
    statisticType: 'count',
  });

  var total_comp = new StatisticDefinition({
    onStatisticField: 'CASE WHEN Status = 4 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_comp',
    statisticType: 'sum',
  });

  var query = new Query();
  query.outStatistics = [total_number, total_comp];

  const queryExpression = 'Station = ' + stationValue;
  query.where = queryExpression;

  const stColumnCompile = stColumnLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const total_number = stats.total_number;
    const total_comp = stats.total_comp;

    return [total_number, total_comp];
  });

  const stFoundationCompile = stFoundationLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const total_number = stats.total_number;
    const total_comp = stats.total_comp;

    return [total_number, total_comp];
  });

  const stFramingCompile = stFramingLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const total_number = stats.total_number;
    const total_comp = stats.total_comp;

    return [total_number, total_comp];
  });

  const floorsCompile = floorsLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const total_number = stats.total_number;
    const total_comp = stats.total_comp;

    return [total_number, total_comp];
  });

  const wallsCompile = wallsLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const total_number = stats.total_number;
    const total_comp = stats.total_comp;

    return [total_number, total_comp];
  });

  const genericCompile = genericLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const total_number = stats.total_number;
    const total_comp = stats.total_comp;

    return [total_number, total_comp];
  });

  const roomsCompile = roomsLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const total_number = stats.total_number;
    const total_comp = stats.total_comp;

    return [total_number, total_comp];
  });

  const siteCompile = siteLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const total_number = stats.total_number;
    const total_comp = stats.total_comp;

    return [total_number, total_comp];
  });

  const stairsCompile = stairsLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const total_number = stats.total_number;
    const total_comp = stats.total_comp;

    return [total_number, total_comp];
  });

  const stairsRailingCompile = stairsRailingLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const total_number = stats.total_number;
    const total_comp = stats.total_comp;

    return [total_number, total_comp];
  });

  const stcolumn = await stColumnCompile;
  const stfoundation = await stFoundationCompile;
  const stframing = await stFramingCompile;
  const floors = await floorsCompile;
  const walls = await wallsCompile;
  const generic = await genericCompile;
  const rooms = await roomsCompile;
  const site = await siteCompile;
  const stairs = await stairsCompile;
  const stairsRailing = await stairsRailingCompile;

  const total =
    stcolumn[0] +
    stfoundation[0] +
    stframing[0] +
    floors[0] +
    walls[0] +
    generic[0] +
    rooms[0] +
    site[0] +
    stairs[0] +
    stairsRailing[0];

  const comp =
    stcolumn[1] +
    stfoundation[1] +
    stframing[1] +
    floors[1] +
    walls[1] +
    generic[1] +
    rooms[1] +
    site[1] +
    stairs[1] +
    stairsRailing[1];
  const progress = ((comp / total) * 100).toFixed(1);
  return [total, comp, progress];
}

// Thousand separators function
export function thousands_separators(num: any) {
  if (num) {
    var num_parts = num.toString().split('.');
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return num_parts.join('.');
  }
}

export function zoomToLayer(layer: any) {
  return layer.queryExtent().then((response: any) => {
    view
      .goTo(response.extent, {
        //response.extent
        speedFactor: 2,
      })
      .catch(function (error) {
        if (error.name !== 'AbortError') {
          console.error(error);
        }
      });
  });
}
