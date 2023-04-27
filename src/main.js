import {render} from './render.js';
import ListFiltersView from './view/list-filters-view.js';
import ListSortView from './view/list-sort-view.js';
import WaypointListPresenter from './view/waypoint-item-view.js';
import TripEventList from './view/trip-event-list';


const siteHeaderElement = document.querySelector('.page-header');
const listFiltersContainer = siteHeaderElement.querySelector('.trip-controls__filters');

const siteMainElement = document.querySelector('.page-main');
const tripEventsContainer = siteMainElement.querySelector('.trip-events');


render(new ListSortView(), tripEventsContainer);
render(new TripEventList(), tripEventsContainer);
render(new ListFiltersView(), listFiltersContainer);

const waypointListPresenter = new WaypointListPresenter({waypointListContainer: tripEventsContainer});
waypointListPresenter.init();
