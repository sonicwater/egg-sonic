// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome = require('../../../app/controller/home');
import ExportNews = require('../../../app/controller/news');
import ExportUser = require('../../../app/controller/user');
import ExportXml = require('../../../app/controller/xml');

declare module 'egg' {
  interface IController {
    home: ExportHome;
    news: ExportNews;
    user: ExportUser;
    xml: ExportXml;
  }
}
