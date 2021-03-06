export const WS_BACKEND_URL =
  process.env.NODE_ENV === 'production'
    ? `ws://${window.location.host}/ws/`
    : 'ws://localhost:8000/ws/';

export const BASE_API_URL =
  process.env.NODE_ENV === 'production'
    ? '/api/v1/'
    : 'http://localhost:8000/api/v1/';

export const FACEBOOK_APP_ID = '147173285892300';
export const FACEBOOK_API_VERSION = 'v2.10';

export const STRIPE_PUBLIC_KEY = process.env.REACT_APP_STRIPE_PUBLIC_KEY;

export const MEDIUM_PAGE_SIZE = 12;
export const ADMIN_TABLE_PAGE_SIZE = 10;
export const AUCTION_BID_PAGE_SIZE = 10;
export const ACCOUNT_BIDS_PAGE_SIZE = 4;
export const BLOG_POSTS_PAGE_SIZE = 10;

/* API content type constants */

export const CONTENT_TYPE_AUCTION = 'auction';
export const CONTENT_TYPE_USER = 'user';

/* Donor constants */

export const DONOR_TYPES = [
  { key: 'company', value: 'Company' },
  { key: 'celebrity', value: 'Celebrity' },
  { key: 'other', value: 'Other' },
];

/* Auction constants */

export const AUCTION_STATUS_PREVIEW = 'preview';
export const AUCTION_STATUS_OPEN = 'open';
export const AUCTION_STATUS_CANCELLED = 'cancelled';
export const AUCTION_STATUS_CANCELLED_DUE_TO_NO_BIDS = 'cancelled-no-bids';
export const AUCTION_STATUS_WAITING_FOR_PAYMENT = 'waiting-for-payment';
export const AUCTION_STATUS_WAITING_TO_SHIP = 'waiting-to-ship';
export const AUCTION_STATUS_SHIPPED = 'shipped';
export const AUCTION_STATUS_FINISHED = 'finished';
export const AUCTION_STATUS_TEXTS = {
  [AUCTION_STATUS_PREVIEW]: 'Preview',
  [AUCTION_STATUS_OPEN]: 'Open',
  [AUCTION_STATUS_CANCELLED]: 'Cancelled',
  [AUCTION_STATUS_CANCELLED_DUE_TO_NO_BIDS]: 'Cancelled due to no bids',
  [AUCTION_STATUS_WAITING_FOR_PAYMENT]: 'Waiting for payment',
  [AUCTION_STATUS_WAITING_TO_SHIP]: 'Waiting to ship',
  [AUCTION_STATUS_SHIPPED]: 'Shipped',
  [AUCTION_STATUS_FINISHED]: 'Finished',
};

export const AUCTION_TABLE_FILTER_UPCOMING = 'upcoming';
export const AUCTION_TABLE_FILTER_IN_PROGRESS = 'inprogress';
export const AUCTION_TABLE_FILTER_FINISHED = 'finished';
export const AUCTION_TABLE_FILTER_CANCELLED = 'cancelled';

/* Bid constants */

export const BID_STATUS_ACTIVE = 'active';
export const BID_STATUS_WON = 'won';
export const BID_STATUS_LOST = 'lost';
export const BID_STATUS_REJECTED = 'rejected';

/* Medium constants */

export const MEDIUM_TYPES = [
  { key: 'image', value: 'Image' },
  { key: 'video', value: 'Video' },
  { key: 'audio', value: 'Audio' },
];

/* Notification constants */

export const NOTIFICATION_TYPE_AUCTION = 'auction';
export const NOTIFICATION_AUCTION_NEW = `${NOTIFICATION_TYPE_AUCTION}/new`;
export const NOTIFICATION_AUCTION_NEW_BID = `${NOTIFICATION_TYPE_AUCTION}/new-bid`;
export const NOTIFICATION_AUCTION_CLOSE = `${NOTIFICATION_TYPE_AUCTION}/close`;
export const NOTIFICATION_AUCTION_PAYMENT = `${NOTIFICATION_TYPE_AUCTION}/payment`;

export const NOTIFICATION_ENTITY_CONTENT_TYPE_AUCTION = 'auction';
export const NOTIFICATION_ENTITY_CONTENT_TYPE_USER = 'user';

/* Product constants */

export const PRODUCT_WEIGHT_UNIT_OUNCE = 'oz';
export const PRODUCT_WEIGHT_UNIT_POUND = 'lb';
export const PRODUCT_WEIGHT_UNIT_KG = 'kg';
export const PRODUCT_WEIGHT_UNIT_GRAM = 'g';

export const PRODUCT_WEIGHT_UNIT_CHOICES = [
  PRODUCT_WEIGHT_UNIT_OUNCE,
  PRODUCT_WEIGHT_UNIT_POUND,
  PRODUCT_WEIGHT_UNIT_KG,
  PRODUCT_WEIGHT_UNIT_GRAM,
];

/* Sale constants */

export const SALE_STATUS_WAITING_FOR_PAYMENT = 'waiting-for-payment';
export const SALE_STATUS_RECEIVED_PAYMENT = 'received-payment';
export const SALE_STATUS_ITEM_SHIPPED = 'item-shipped';
export const SALE_STATUS_CANCELLED = 'cancelled';

export const SALE_STATUS_CHOICES = [
  { key: SALE_STATUS_WAITING_FOR_PAYMENT, value: 'Waiting for payment' },
  { key: SALE_STATUS_RECEIVED_PAYMENT, value: 'Received payment' },
  { key: SALE_STATUS_ITEM_SHIPPED, value: 'Item shipped' },
  { key: SALE_STATUS_CANCELLED, value: 'Cancelled' },
];

/* Blog constants */

export const POST_VISIBILITY_PUBLIC = 'public';
export const POST_VISIBILITY_PROTECTED = 'protected';
export const POST_VISIBILITY_PRIVATE = 'private';

export const COMMENT_STATUS_PUBLIC = 'public';
export const COMMENT_STATUS_REVIEW = 'review';
export const COMMENT_STATUS_FLAGGED = 'flagged';

/* React Intl config */

export const INTL = {
  locale: 'en',
  formats: {
    date: {
      numericDate: {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
      },
      monthAndYear: {
        month: 'long',
        year: 'numeric',
      },
      dayMonthAndYear: {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      },
      year: {
        year: 'numeric',
      },
    },
    number: {
      currency: {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      },
      currencyWithoutCents: {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      },
      percent: {
        style: 'percent',
        minimumFractionDigits: 1,
        maximumFractionDigits: 2,
      },
      percentRounded: {
        style: 'percent',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      },
      decimal: {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      },
    },
  },
};

export const MAILCHIMP_TYPE_DONORS = 'donors';
export const MAILCHIMP_TYPE_NEWSLETTER = 'newsletter';

export const MAILCHIMP_SUBSCRIBE_URL = {
  [MAILCHIMP_TYPE_DONORS]:
    'https://auction.us17.list-manage.com/subscribe/post-json?u=8cd4324f13de64eb84da0c1f3&id=19f358b366&b_8cd4324f13de64eb84da0c1f3_19f358b366', // eslint-disable-line
  [MAILCHIMP_TYPE_NEWSLETTER]:
    'https://auction.us17.list-manage.com/subscribe/post-json?u=8cd4324f13de64eb84da0c1f3&id=80da438e73&b_8cd4324f13de64eb84da0c1f3_80da438e73', // eslint-disable-line
};
