import { Meteor } from 'meteor/meteor';
import { OHIF } from 'meteor/ohif:core';

OHIF.user.getUserId = () => Meteor.userId();
