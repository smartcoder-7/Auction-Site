export const AUTH_SIGNIN = 'auction/auth/signin';
export const AUTH_SIGNOUT = 'auction/auth/signout';
export const AUTH_SIGNUP = 'auction/auth/signup';
export const AUTH_SIGNUP_WITH_FACEBOOK = 'auction/auth/signup-with-facebook';
export const AUTH_VERIFY_SIGNUP = 'auction/auth/verify-signup';
export const AUTH_VERIFY_SIGNUP_RESET = 'auction/auth/verify-signup-reset';
export const AUTH_CURRENT_USER = 'auction/auth/current-user';
export const AUTH_CURRENT_USER_UPDATE = 'auction/auth/current-user/update';
export const AUTH_CURRENT_USER_AVATAR_UPLOAD =
  'auction/auth/current-user-avatar/upload';
export const AUTH_PASSWORD_UPDATE = 'auction/auth/password-update';

export const ADMIN_GET_CHARITY_LIST = 'auction/admin/get-charity-list';
export const ADMIN_CREATE_CHARITY = 'auction/admin/create-charity';
export const ADMIN_GET_CHARITY_DETAIL = 'auction/admin/get-charity-detail';
export const ADMIN_UPDATE_CHARITY_DETAIL =
  'auction/admin/update-charity-detail';
export const ADMIN_UPLOAD_CHARITY_LOGO = 'auction/admin/upload-charity-logo';
export const ADMIN_DELETE_CHARITY = 'auction/admin/delete-charity';

export const ADMIN_GET_DONOR_LIST = 'auction/admin/get-donor-list';
export const ADMIN_CREATE_DONOR = 'auction/admin/create-donor';
export const ADMIN_GET_DONOR_DETAIL = 'auction/admin/get-donor-detail';
export const ADMIN_UPDATE_DONOR_DETAIL = 'auction/admin/update-donor-detail';
export const ADMIN_DELETE_DONOR = 'auction/admin/delete-donor';
export const ADMIN_GET_DONOR_PRODUCT_LIST =
  'auction/admin/get-donor-product-list';
export const ADMIN_UPLOAD_DONOR_MEDIUM = 'auction/admin/upload-donor-medium';
export const ADMIN_DELETE_DONOR_MEDIUM = 'auction/admin/delete-donor-medium';
export const ADMIN_REORDER_DONOR_MEDIUM = 'auction/admin/reorder-donor-medium';

export const ADMIN_GET_PRODUCT_LIST = 'auction/admin/get-product-list';
export const ADMIN_CREATE_PRODUCT = 'auction/admin/create-product';
export const ADMIN_GET_PRODUCT_DETAIL = 'auction/admin/get-product-detail';
export const ADMIN_UPDATE_PRODUCT_DETAIL =
  'auction/admin/update-product-detail';
export const ADMIN_DELETE_PRODUCT = 'auction/admin/delete-product';
export const ADMIN_UPLOAD_PRODUCT_MEDIUM =
  'auction/admin/upload-product-medium';
export const ADMIN_DELETE_PRODUCT_MEDIUM =
  'auction/admin/delete-product-medium';
export const ADMIN_REORDER_PRODUCT_MEDIUM =
  'auction/admin/reorder-product-medium';
export const ADMIN_GET_PRODUCT_DONOR_CHARITY_LIST =
  'auction/admin/get-auction-product-donor-charity-list';

export const ADMIN_GET_AUCTION_LIST = 'auction/admin/get-auction-list';
export const ADMIN_CREATE_AUCTION = 'auction/admin/create-auction';
export const ADMIN_GET_AUCTION_DETAIL = 'auction/admin/get-auction-detail';
export const ADMIN_UPDATE_AUCTION_DETAIL =
  'auction/admin/update-auction-detail';
export const ADMIN_START_AUCTION = 'auction/admin/start-auction';
export const ADMIN_FINISH_AUCTION = 'auction/admin/finish-auction';
export const ADMIN_CANCEL_AUCTION = 'auction/admin/cancel-auction';
export const ADMIN_DELETE_AUCTION = 'auction/admin/delete-auction';
export const ADMIN_GET_AUCTION_BID_LIST_PAGE =
  'auction/admin/get-auction-bid-list-page';
export const ADMIN_AUCTION_CHANGE_BID_STATUS =
  'auction/admin/auction-change-bid-status';
export const ADMIN_GET_AUCTION_BACKLOG = 'auction/admin/get-auction-backlog';

export const ADMIN_GET_SALE_LIST = 'auction/admin/get-sale-list';
export const ADMIN_GET_SALE_DETAIL = 'auction/admin/get-sale-detail';
export const ADMIN_UPDATE_SALE = 'auction/admin/update-sale';
export const ADMIN_SET_SALE_NOTE = 'auction/admin/set-sale-note';

export const ADMIN_GET_POST_LIST = 'auction/admin/get-post-list';
export const ADMIN_GET_POST_DETAIL = 'auction/admin/get-post-detail';
export const ADMIN_CREATE_POST = 'auction/admin/create-post';
export const ADMIN_UPDATE_POST = 'auction/admin/update-post';

export const ADMIN_GET_TAG_SUGGESTIONS = 'auction/admin/get-tag-suggestions';

export const ADMIN_GET_USER_LIST = 'auction/admin/get-user-list';
export const ADMIN_BLOCK_UNBLOCK_USER = 'auction/admin/block-unblock-user';
export const ADMIN_GET_USER_HISTORY = 'auction/admin/get-user-history';

export const ADMIN_GET_MEDIUM_LIST_PAGE = 'auction/admin/get-medium-list';

export const ADMIN_ADD_NOTIFICATION = 'auction/admin/add-notification';
export const ADMIN_RESET_NOTIFICATION_UNREAD_COUNT =
  'auction/admin/reset-notification-unread-count';
export const ADMIN_GET_NOTIFICATION_LIST_ON_MENU =
  'auction/admin/get-notification-list-on-menu';
export const ADMIN_GET_NOTIFICATION_PAGE =
  'auction/admin/get-notification-page';

export const ADMIN_SETTINGS_GET_CATEGORIES_MENU_ITEMS =
  'auction/admin/settings-categories-menu-items-get';
export const ADMIN_SETTINGS_UPDATE_CATEGORIES_MENU_ITEMS =
  'auction/admin/settings-categories-menu-items-update';
export const ADMIN_SETTINGS_LIST = 'auction/admin/settings-list';

export const ACCOUNT_GET_MY_BIDS = 'auction/account/get-my-bids';
export const ACCOUNT_DELETE_MY_BID = 'auction/account/delete-my-bid';

export const AUCTION_GET_LIST = 'auction/auctions/get-list';
export const AUCTION_GET_DETAIL = 'auction/auctions/get-detail';
export const AUCTION_GET_TRENDING_LIST = 'auction/auctions/get-trending-list';
export const AUCTION_PLACE_BID = 'auction/auctions/place-bid';

export const DONOR_GET_FRONT_LIST = 'auction/donors/get-front-list';
export const DONOR_GET_LIST_PAGE = 'auction/donors/get-list-page';
export const DONOR_GET_DETAIL = 'auction/donors/get-detail';

export const BLOG_GET_POST_FRONT_LIST = 'auction/blog/get-post-front-list';
export const BLOG_GET_POST_LIST_PAGE = 'auction/blog/get-post-list-page';
export const BLOG_GET_POST_DETAIL = 'auction/blog/get-post-detail';
export const BLOG_GET_POST_COMMENT_LIST = 'auction/blog/get-post-comment-list';
export const BLOG_CREATE_POST_COMMENT = 'auction/blog/create-post-comment';

export const JOB_GET_LIST = 'auction/jobs/get-list';
export const JOB_GET_DETAIL = 'auction/jobs/get-detail';

export const SETTINGS_GET_CATEGORIES_MENU_ITEMS =
  'auction/settings/categories-menu-items-get';
export const SETTINGS_GET_COUNTRIES = 'auction/settings/countries';

export const ACCOUNT_SET_PAYMENT = 'auction/account/set-payment';
export const PAYMENT_TEST = 'auction/payment/test';
