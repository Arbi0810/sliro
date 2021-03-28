(function(require){
(function() {
var config = {
    config: {
        mixins: {
            'Amasty_Conf/js/swatch-renderer': {
                'Amasty_Cart/js/swatch-renderer': true
            },
            'Magento_Swatches/js/swatch-renderer': {
                'Amasty_Cart/js/swatch-renderer': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    'waitSeconds': 0,
    'map': {
        '*': {
            'ko': 'knockoutjs/knockout',
            'knockout': 'knockoutjs/knockout',
            'mageUtils': 'mage/utils/main',
            'rjsResolver': 'mage/requirejs/resolver'
        }
    },
    'shim': {
        'jquery/jquery-migrate': ['jquery'],
        'jquery/jquery.hashchange': ['jquery', 'jquery/jquery-migrate'],
        'jquery/jstree/jquery.hotkeys': ['jquery'],
        'jquery/hover-intent': ['jquery'],
        'mage/adminhtml/backup': ['prototype'],
        'mage/captcha': ['prototype'],
        'mage/common': ['jquery'],
        'mage/new-gallery': ['jquery'],
        'mage/webapi': ['jquery'],
        'jquery/ui': ['jquery'],
        'MutationObserver': ['es6-collections'],
        'tinymce': {
            'exports': 'tinymce'
        },
        'moment': {
            'exports': 'moment'
        },
        'matchMedia': {
            'exports': 'mediaCheck'
        },
        'jquery/jquery-storageapi': {
            'deps': ['jquery/jquery.cookie']
        }
    },
    'paths': {
        'jquery/validate': 'jquery/jquery.validate',
        'jquery/hover-intent': 'jquery/jquery.hoverIntent',
        'jquery/file-uploader': 'jquery/fileUploader/jquery.fileupload-fp',
        'jquery/jquery.hashchange': 'jquery/jquery.ba-hashchange.min',
        'prototype': 'legacy-build.min',
        'jquery/jquery-storageapi': 'jquery/jquery.storageapi.min',
        'text': 'mage/requirejs/text',
        'domReady': 'requirejs/domReady',
        'tinymce': 'tiny_mce/tiny_mce_src'
    },
    'deps': [
        'jquery/jquery-migrate'
    ],
    'config': {
        'mixins': {
            'jquery/jstree/jquery.jstree': {
                'mage/backend/jstree-mixin': true
            }
        },
        'text': {
            'headers': {
                'X-Requested-With': 'XMLHttpRequest'
            }
        }
    }
};

require(['jquery'], function ($) {
    'use strict';

    $.noConflict();
});

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            'rowBuilder':             'Magento_Theme/js/row-builder',
            'toggleAdvanced':         'mage/toggle',
            'translateInline':        'mage/translate-inline',
            'sticky':                 'mage/sticky',
            'tabs':                   'mage/tabs',
            'zoom':                   'mage/zoom',
            'collapsible':            'mage/collapsible',
            'dropdownDialog':         'mage/dropdown',
            'dropdown':               'mage/dropdowns',
            'accordion':              'mage/accordion',
            'loader':                 'mage/loader',
            'tooltip':                'mage/tooltip',
            'deletableItem':          'mage/deletable-item',
            'itemTable':              'mage/item-table',
            'fieldsetControls':       'mage/fieldset-controls',
            'fieldsetResetControl':   'mage/fieldset-controls',
            'redirectUrl':            'mage/redirect-url',
            'loaderAjax':             'mage/loader',
            'menu':                   'mage/menu',
            'popupWindow':            'mage/popup-window',
            'validation':             'mage/validation/validation',
            'welcome':                'Magento_Theme/js/view/welcome',
            'breadcrumbs':            'Magento_Theme/js/view/breadcrumbs'
        }
    },
    paths: {
        'jquery/ui': 'jquery/jquery-ui'
    },
    deps: [
        'jquery/jquery.mobile.custom',
        'mage/common',
        'mage/dataPost',
        'mage/bootstrap'
    ],
    config: {
        mixins: {
            'Magento_Theme/js/view/breadcrumbs': {
                'Magento_Theme/js/view/add-home-breadcrumb': true
            }
        }
    }
};

require.config(config);
})();
(function() {
var config = {
    map: {
        '*': {
            htmlSitemap: 'Amasty_SeoHtmlSitemap/js/textSearch'
        }
    }
};
require.config(config);
})();
(function() {
var config = {
    map: {
        '*': {
            'amSeoToolbar': 'Amasty_SeoToolKit/js/toolbar'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            checkoutBalance:    'Magento_Customer/js/checkout-balance',
            address:            'Magento_Customer/address',
            changeEmailPassword: 'Magento_Customer/change-email-password',
            passwordStrengthIndicator: 'Magento_Customer/js/password-strength-indicator',
            zxcvbn: 'Magento_Customer/js/zxcvbn',
            addressValidation: 'Magento_Customer/js/addressValidation'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            compareList:            'Magento_Catalog/js/list',
            relatedProducts:        'Magento_Catalog/js/related-products',
            upsellProducts:         'Magento_Catalog/js/upsell-products',
            productListToolbarForm: 'Magento_Catalog/js/product/list/toolbar',
            catalogGallery:         'Magento_Catalog/js/gallery',
            priceBox:               'Magento_Catalog/js/price-box',
            priceOptionDate:        'Magento_Catalog/js/price-option-date',
            priceOptionFile:        'Magento_Catalog/js/price-option-file',
            priceOptions:           'Magento_Catalog/js/price-options',
            priceUtils:             'Magento_Catalog/js/price-utils',
            catalogAddToCart:       'Magento_Catalog/js/catalog-add-to-cart'
        }
    },
    config: {
        mixins: {
            'Magento_Theme/js/view/breadcrumbs': {
                'Magento_Catalog/js/product/breadcrumbs': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            quickSearch: 'Magento_Search/form-mini'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            creditCardType: 'Magento_Payment/cc-type'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * BSS Commerce Co.
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the EULA
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://bsscommerce.com/Bss-Commerce-License.txt
 *
 * @category   BSS
 * @package    Bss_Core
 * @author     Extension Team
 * @copyright  Copyright (c) 2017-2018 BSS Commerce Co. ( http://bsscommerce.com )
 * @license    http://bsscommerce.com/Bss-Commerce-License.txt
 */
var config = {
    map: {
        '*': {
            bssFancybox: 'Bss_Core/js/fancybox/core',
            bssJsColor: 'Bss_Core/js/jscolor/jscolor',
            bssOwlCarousel: 'Bss_Core/js/owlcarousel/owl-carousel',
            bssTooltipster: 'Bss_Core/js/tooltipster/tooltipster.main'
        }
    }
};

require.config(config);
})();
(function() {
var config = {
    paths: {
        "jquery.cookie": "Incognito_CookieCompliance/js/jquery.cookie"
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright � 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            'incognito/core/owl.carousel': 'Incognito_Core/js/owl.carousel.min'
        }
    },
    shim: {
        "incognito/core/owl.carousel": ["jquery"]
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            addToCart: 'Magento_Msrp/js/msrp'
        }
    }
};

require.config(config);
})();
(function() {
var config = {
    paths: {
        "jquery.cookie": "Incognito_IncognitoMonk/js/jquery.cookie",
        "jscookies":"Incognito_IncognitoMonk/js/js.cookie.min",
        "bioep": "Incognito_IncognitoMonk/js/bioep"
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            giftMessage:    'Magento_Sales/gift-message',
            ordersReturns:  'Magento_Sales/orders-returns'
        }
    }
};

require.config(config);
})();
(function() {
/*eslint no-unused-vars: 0*/
var config = {
    map: {
        '*': {
            portfolioListing: 'Incognito_PortfolioProducts/js/portfolio-listing'
        }
    }
};
require.config(config);
})();
(function() {
/*eslint no-unused-vars: 0*/
var config = {
    map: {
        '*': {
            productCalculator: 'Incognito_ProductCalculator/js/product-calculator',
        }
    }
};
require.config(config);
})();
(function() {
/**
 * Incognito
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Incognito.com license that is
 * available through the world-wide-web at this URL:
 * https://www.incognito.com/LICENSE.txt
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade this extension to newer
 * version in the future.
 *
 * @category    Incognito
 * @package     Incognito_SocialLogin
 * @copyright   Copyright (c) 2016 Incognito (http://www.incognito.com/)
 * @license     https://www.incognito.com/LICENSE.txt
 */

var config = {
    map: {
        '*': {
            'jqueryPopup': 'Incognito_SocialLogin/js/jquery.magnific-popup.min',
        }
    },
    shim: {
        "jqueryPopup": ["jquery"],
    },
    paths: {
        socialProvider: 'Incognito_SocialLogin/js/provider',
        socialPopupForm: 'Incognito_SocialLogin/js/popup'
    }
};

require.config(config);
})();
(function() {
var config = {
    map: {
        '*': {
            'customSticky': 'Incognito_SummaryStep/js/custom-sticky',

            'Magento_Checkout/template/sidebar.html':
                'Incognito_SummaryStep/template/sidebar.html',

            'Magento_Checkout/template/onepage.html':
                'Incognito_SummaryStep/template/onepage.html',

            'Magento_Checkout/template/summary/cart-items.html':
                'Incognito_SummaryStep/template/sidebar/cart-items.html',

            'Magento_Checkout/template/summary.html':
                'Incognito_SummaryStep/template/sidebar/summary.html',

            'Magento_Checkout/template/shipping.html':
                'Incognito_SummaryStep/template/shipping.html',

            'Magento_Checkout/template/progress-bar.html':
                'Incognito_SummaryStep/template/progress-bar.html',

            'EuroPayment_EuPlatesc/template/payment/eppay.html':
                'Incognito_SummaryStep/template/payment/eppay.html',

            'Mobilpay_Credit/template/payment/cardcc.html':
                'Incognito_SummaryStep/template/payment/cardcc.html',
        },
    },

    config: {
        mixins: {
            'Magento_Checkout/js/view/sidebar': {
                'Incognito_SummaryStep/js/view/sidebar-mixin': true
            },

            'Magento_Checkout/js/view/shipping-information': {
                'Incognito_SummaryStep/js/view/shipping-information-mixin': true
            },

            'Magento_Checkout/js/view/payment': {
                'Incognito_SummaryStep/js/view/payment-mixin': true
            },

            'Magento_Checkout/js/view/shipping': {
                'Incognito_SummaryStep/js/view/shipping-mixin': true
            },

            'Magento_Ui/js/form/components/group': {
                'Incognito_SummaryStep/js/form/components/group-mixin': true
            },

            'Magento_Checkout/js/view/progress-bar': {
                'Incognito_SummaryStep/js/view/progress-bar-mixin': true
            },

            'Incognito_LegalPerson/js/view/shipping-information/address-renderer/default': {
                'Incognito_SummaryStep/js/view/shipping-information/address-renderer/default-mixin': true
            },

            'Magento_Tax/js/view/checkout/cart/totals/shipping': {
                'Incognito_SummaryStep/js/view/checkout/cart/totals/shipping-mixin': true
            },

            'Magento_Checkout/js/view/summary/item/details/subtotal': {
                'Incognito_SummaryStep/js/view/summary/item/details/subtotal-mixin': true
            },
        }
    }
};
require.config(config);
})();
(function() {
/**
 * Copyright © 2018 Intenso Commerce. All rights reserved.
 * See License.txt for license details.
 */

var config = {
    paths: {
        'flipClock': 'Incognito_Tinker/js/flipclock.min'
    },
    shim: {
        'flipClock': {
            deps: ['jquery'],
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            discountCode:           'Magento_Checkout/js/discount-codes',
            shoppingCart:           'Magento_Checkout/js/shopping-cart',
            regionUpdater:          'Magento_Checkout/js/region-updater',
            sidebar:                'Magento_Checkout/js/sidebar',
            checkoutLoader:         'Magento_Checkout/js/checkout-loader',
            checkoutData:           'Magento_Checkout/js/checkout-data',
            proceedToCheckout:      'Magento_Checkout/js/proceed-to-checkout'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            transparent: 'Magento_Payment/transparent'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            orderReview: 'Magento_Paypal/order-review',
            paypalCheckout: 'Magento_Paypal/js/paypal-checkout'
        }
    },
    paths: {
        paypalInContextExpressCheckout: 'https://www.paypalobjects.com/api/checkout'
    },
    shim: {
        paypalInContextExpressCheckout: {
            exports: 'paypal'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            transparent: 'Magento_Payment/transparent'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            bundleOption:   'Magento_Bundle/bundle',
            priceBundle:    'Magento_Bundle/js/price-bundle',
            slide:          'Magento_Bundle/js/slide',
            productSummary: 'Magento_Bundle/js/product-summary'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            captcha: 'Magento_Captcha/captcha'
        }
    }
};

require.config(config);
})();
(function() {
var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/model/shipping-rates-validation-rules': {
                'Amasty_Conditions/js/model/shipping-rates-validation-rules-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            configurable: 'Magento_ConfigurableProduct/js/configurable'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/action/place-order': {
                'Magento_CheckoutAgreements/js/model/place-order-mixin': true
            },
            'Magento_Checkout/js/action/set-payment-information': {
                'Magento_CheckoutAgreements/js/model/set-payment-information-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            downloadable: 'Magento_Downloadable/downloadable'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            requireCookie: 'Magento_Cookie/js/require-cookie',
            cookieNotices: 'Magento_Cookie/js/notices'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            catalogSearch: 'Magento_CatalogSearch/form-mini'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            giftOptions:    'Magento_GiftMessage/gift-options',
            extraOptions:   'Magento_GiftMessage/extra-options'
        }
    }
};

require.config(config);
})();
(function() {
/*eslint no-unused-vars: 0*/
var config = {
    map: {
        '*': {
            "Magento_GoogleAnalytics/js/google-analytics": 'Incognito_GaFix/js/google-analytics'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    paths: {
        'ui/template': 'Magento_Ui/templates'
    },
    map: {
        '*': {
            uiElement:      'Magento_Ui/js/lib/core/element/element',
            uiCollection:   'Magento_Ui/js/lib/core/collection',
            uiComponent:    'Magento_Ui/js/lib/core/collection',
            uiClass:        'Magento_Ui/js/lib/core/class',
            uiEvents:       'Magento_Ui/js/lib/core/events',
            uiRegistry:     'Magento_Ui/js/lib/registry/registry',
            consoleLogger:  'Magento_Ui/js/lib/logger/console-logger',
            uiLayout:       'Magento_Ui/js/core/renderer/layout',
            buttonAdapter:  'Magento_Ui/js/form/button-adapter'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * @author    Amasty Team
 * @copyright Copyright (c) Amasty Ltd. ( http://www.amasty.com/ )
 * @package   Amasty_Shopby
 */

var config = {
    map: {
        '*': {
            amShopbyFilterAbstract: 'Amasty_Shopby/js/amShopby',
            amShopbyFilterItemDefault: 'Amasty_Shopby/js/amShopby',
            amShopbyFilterDropdown: 'Amasty_Shopby/js/amShopby',
            amShopbyFilterFromTo: 'Amasty_Shopby/js/amShopby',
            amShopbyFilterSlider: 'Amasty_Shopby/js/amShopby',
            amShopbyAjax: 'Amasty_Shopby/js/amShopbyAjax',
            amShopbyFilterSearch: 'Amasty_Shopby/js/amShopby',
            amShopbyFilterHideMoreOptions: 'Amasty_Shopby/js/amShopby',
            amShopbyFilterAddTooltip: 'Amasty_Shopby/js/amShopby',
            amShopbySwatchesChoose: 'Amasty_Shopby/js/amShopbySwatchesChoose',
            amShopbyFilterMultiselect: 'Amasty_Shopby/js/amShopby',
            amShopbyFilterSwatch: 'Amasty_Shopby/js/amShopby',
            amShopbyFiltersSync: 'Amasty_Shopby/js/amShopbyFiltersSync',
            amShopbyApplyFilters: 'Amasty_Shopby/js/amShopbyApplyFilters',
            amShopbyTopFilters: 'Amasty_Shopby/js/amShopbyTopFilters',
            amShopbyFilterCategoryDropdown: 'Amasty_Shopby/js/amShopby',
            amShopbyFilterCategoryLabelsFolding: 'Amasty_Shopby/js/amShopby',
            amShopbyFilterCategoryFlyOut: 'Amasty_Shopby/js/amShopby',
            amShopbyFilterContainer: 'Amasty_Shopby/js/amShopby'
        }
    },
    deps: [
        'Amasty_Shopby/js/amShopbyResponsive'
    ]
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            multiShipping: 'Magento_Multishipping/js/multi-shipping',
            orderOverview: 'Magento_Multishipping/js/overview',
            payment: 'Magento_Multishipping/js/payment',
            billingLoader: 'Magento_Checkout/js/checkout-loader'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            pageCache:  'Magento_PageCache/js/page-cache'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            recentlyViewedProducts: 'Magento_Reports/js/recently-viewed'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            loadPlayer: 'Magento_ProductVideo/js/load-player',
            fotoramaVideoEvents: 'Magento_ProductVideo/js/fotorama-add-video-events'
        }
    },
    shim: {
        vimeoAPI: {}
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright 2016 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *  http://aws.amazon.com/apache2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

var config = {
    map: {
        '*': {
            amazonLogout: 'Amazon_Login/js/amazon-logout',
            amazonOAuthRedirect: 'Amazon_Login/js/amazon-redirect',
            amazonCsrf: 'Amazon_Login/js/amazon-csrf'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © 2018 Intenso Commerce. All rights reserved.
 * See License.txt for license details.
 */

var config = {
    paths: {
        'slick': 'Intenso_Review/js/slick.min'
    },
    shim: {
        'slick': {
            deps: ['jquery'],
            exports: 'jQuery.fn.slick',
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright 2016 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *  http://aws.amazon.com/apache2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */
var config = {
    map: {
        '*': {
            amazonCore: 'Amazon_Payment/js/amazon-core',
            amazonWidgetsLoader: 'Amazon_Payment/js/amazon-widgets-loader',
            amazonButton: 'Amazon_Payment/js/amazon-button',
            amazonProductAdd: 'Amazon_Payment/js/amazon-product-add',
            amazonPaymentConfig: 'Amazon_Payment/js/model/amazonPaymentConfig',
            sjcl: 'Amazon_Payment/js/lib/sjcl.min'
        }
    },
    config: {
        mixins: {
            'Amazon_Payment/js/action/place-order': {
                'Amazon_Payment/js/model/place-order-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/*eslint no-unused-vars: 0*/
var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/model/new-customer-address': {
                'Incognito_LegalPerson/js/model/checkout/new-customer-address-mixin': true
            },
            'Magento_Checkout/js/action/place-order': {
                'Incognito_LegalPerson/js/action/place-order-mixin': true
            }
        }
    },
    map: {
        '*': {
            incognitoCompanyDataToggle: 'Incognito_LegalPerson/js/company-data-toggle',
            customerAddressFilter: "Incognito_LegalPerson/js/customer-address-filter",

            "Magento_Checkout/js/view/shipping-information/address-renderer/default": 'Incognito_LegalPerson/js/view/shipping-information/address-renderer/default',
            "Magento_Checkout/template/billing-address/details": 'Incognito_LegalPerson/template/billing-address/details',
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            wishlist:       'Magento_Wishlist/js/wishlist',
            addToWishlist:  'Magento_Wishlist/js/add-to-wishlist',
            wishlistSearch: 'Magento_Wishlist/js/search'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * This file is part of the Klarna KP module
 *
 * (c) Klarna Bank AB (publ)
 *
 * For the full copyright and license information, please view the NOTICE
 * and LICENSE files that were distributed with this source code.
 */
var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/action/get-payment-information': {
                'Klarna_Kp/js/action/override': true
            }
        }
    },
    map: {
        '*': {
            klarnapi: 'https://x.klarnacdn.net/kp/lib/v1/api.js'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            editTrigger: 'mage/edit-trigger',
            addClass: 'Magento_Translation/add-class'
        }
    },
    deps: [
        'mage/translate-inline'
    ]
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            braintree: 'https://js.braintreegateway.com/js/braintree-2.32.0.min.js'
        }
    }
};

require.config(config);
})();
(function() {
var config = 
{
    config: 
    {
        mixins: 
        {
        	'Magento_Checkout/js/action/select-payment-method':
			{
				'Anowave_Ec/js/action/select-payment-method':true
			},
			'Magento_Checkout/js/action/select-shipping-method':
			{
				'Anowave_Ec/js/action/select-shipping-method':true
			},
			'Magento_Checkout/js/action/place-order': 
			{
			    'Anowave_Ec/js/action/place-order': true
			},
            'Magento_Checkout/js/model/step-navigator': 
            {
                'Anowave_Ec/js/step-navigator/plugin': true
            },
            'Magento_Checkout/js/view/shipping-information': 
			{
			    'Anowave_Ec/js/view/shipping-information': true
			},
            'Magento_Customer/js/action/check-email-availability':
			{
				'Anowave_Ec/js/action/check-email-availability':true
			},
            'Magento_Checkout/js/sidebar':
            {
            	'Anowave_Ec/js/sidebar': true
            },
            'Magento_Catalog/js/price-box':
            {
            	'Anowave_Ec/js/price-box': true
            },
            'Magento_SalesRule/js/view/payment/discount':
            {
            	'Anowave_Ec/js/discount': true
            },
            'Magento_ConfigurableProduct/js/configurable':
            {
            	'Anowave_Ec/js/configurable': true
            },
    		'Magento_Swatches/js/swatch-renderer':
    		{
    			'Anowave_Ec/js/swatch-renderer': true
    		}
        }
    }
};
require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            'taxToggle': 'Magento_Weee/tax-toggle'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Ebizmarts_MailChimp Magento JS component
 *
 * @category    Ebizmarts
 * @package     Ebizmarts_MailChimp
 * @author      Ebizmarts Team <info@ebizmarts.com>
 * @copyright   Ebizmarts (http://ebizmarts.com)
 * @license     http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 */

var config = {
    "map": {
        "*": {
            campaigncatcher: 'Ebizmarts_MailChimp/js/campaigncatcher'
        }
    }
};
require.config(config);
})();
(function() {
/**
 * Mageplaza
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the mageplaza.com license that is
 * available through the world-wide-web at this URL:
 * https://www.mageplaza.com/LICENSE.txt
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade this extension to newer
 * version in the future.
 *
 * @category    Mageplaza
 * @package     Mageplaza_Core
 * @copyright   Copyright (c) Mageplaza (https://www.mageplaza.com/)
 * @license     https://www.mageplaza.com/LICENSE.txt
 */

var config = {
    paths: {
        'mageplaza/core/jquery/popup': 'Mageplaza_Core/js/jquery.magnific-popup.min',
        'mageplaza/core/owl.carousel': 'Mageplaza_Core/js/owl.carousel.min',
        'mageplaza/core/bootstrap': 'Mageplaza_Core/js/bootstrap.min',
        mpIonRangeSlider: 'Mageplaza_Core/js/ion.rangeSlider.min',
        touchPunch: 'Mageplaza_Core/js/jquery.ui.touch-punch.min',
        mpDevbridgeAutocomplete: 'Mageplaza_Core/js/jquery.autocomplete.min'
    },
    shim: {
        "mageplaza/core/jquery/popup": ["jquery"],
        "mageplaza/core/owl.carousel": ["jquery"],
        "mageplaza/core/bootstrap": ["jquery"],
        mpIonRangeSlider: ["jquery"],
        mpDevbridgeAutocomplete: ["jquery"],
        touchPunch: ['jquery', 'jquery/ui']
    }
};

require.config(config);
})();
(function() {

var config = {
    config: {
        mixins: {
            'Magento_Swatches/js/swatch-renderer': {
                'MagicToolbox_MagicZoom/js/swatch-renderer': true
            },
            /* NOTE: for Magento v2.0.x */
            'Magento_Swatches/js/SwatchRenderer': {
                'MagicToolbox_MagicZoom/js/swatch-renderer': true
            }
        }
    },
    map: {
        '*': {
            magicToolboxThumbSwitcher: 'MagicToolbox_MagicZoom/js/thumb-switcher',
            configurable:              'MagicToolbox_MagicZoom/js/configurable'
        }
    }
};

require.config(config);
})();
(function() {

var config = {
    config: {
        mixins: {
            'Magento_Swatches/js/swatch-renderer': {
                'MagicToolbox_MagicScroll/js/swatch-renderer': true
            },
            /* NOTE: for Magento v2.0.x */
            'Magento_Swatches/js/SwatchRenderer': {
                'MagicToolbox_MagicScroll/js/swatch-renderer': true
            }
        }
    },
    map: {
        '*': {
            configurable:              'MagicToolbox_MagicScroll/js/configurable'
        }
    }
};

require.config(config);
})();
(function() {

var config = {
    config: {
        mixins: {
            'mage/gallery/gallery': {
                'MagicToolbox_Magic360/js/gallery': true
            },
            'Magento_ProductVideo/js/fotorama-add-video-events': {
                'MagicToolbox_Magic360/js/fotorama-add-video-events': true
            },
            'Magento_Swatches/js/swatch-renderer': {
                'MagicToolbox_Magic360/js/swatch-renderer': true
            },
            /* NOTE: for Magento v2.0.x */
            'Magento_Swatches/js/SwatchRenderer': {
                'MagicToolbox_Magic360/js/swatch-renderer': true
            }
        }
    },
    map: {
        '*': {
            configurable:              'MagicToolbox_Magic360/js/configurable'
        }
    }
};

require.config(config);
})();
(function() {
var config = {
    "map": {
        '*': {
            'nwdthemes/jquery.easing' : 'Nwdthemes_Base/js/jquery.easing',
            'nwdthemes/owl.carousel' : 'Nwdthemes_Base/js/owl.carousel',
            'nwdthemes/owl.carousel.min' : 'Nwdthemes_Base/js/owl.carousel.min'
        }
    },
    "shim": {
        "nwdthemes/owl.carousel": ["jquery"],
        "nwdthemes/owl.carousel.min": ["jquery"]
    }
};
require.config(config);
})();
(function() {
var config = {
    paths: {
        touchSwipe:             'Nwdthemes_Revslider/public/assets/js/tools/TouchSwipe',
        themepunchGS:           'Nwdthemes_Revslider/public/assets/js/tools/themepunch_gs',
        TweenLite:              'Nwdthemes_Revslider/public/assets/js/tools/TweenLite',
        TimelineLite:           'Nwdthemes_Revslider/public/assets/js/tools/TimelineLite',
        EasePack:               'Nwdthemes_Revslider/public/assets/js/tools/easing/EasePack',
        CSSPlugin:              'Nwdthemes_Revslider/public/assets/js/tools/CSSPlugin',
        SplitText:              'Nwdthemes_Revslider/public/assets/js/tools/SplitText',
        waitForImages:          'Nwdthemes_Revslider/public/assets/js/tools/waitForImages',
        themepunchTools:        'Nwdthemes_Revslider/public/assets/js/jquery.themepunch.tools.min',
        themepunchRevolution:   'Nwdthemes_Revslider/public/assets/js/jquery.themepunch.revolution.min',
        vimeoPlayer:            'Nwdthemes_Revslider/public/assets/js/vimeo.player.min'
    },
    shim: {
        themepunchTools: {
            deps: ['themepunchGS', 'TweenLite', 'TimelineLite', 'EasePack', 'CSSPlugin', 'SplitText', 'waitForImages', 'touchSwipe'],
            exports: 'punchgs'
        },
        themepunchRevolution: {
            deps: ['jquery', 'themepunchTools'],
            exports: 'nwdjQuery'
        }
    }
};
require.config(config);
})();
(function() {
var config = {
    paths: {
        temandoCheckoutFieldsDefinition: 'Temando_Shipping/js/model/fields-definition',
        temandoDeliveryOptions: 'Temando_Shipping/js/model/delivery-options',
        temandoShippingRatesValidator: 'Temando_Shipping/js/model/shipping-rates-validator/temando',
        temandoShippingRatesValidationRules: 'Temando_Shipping/js/model/shipping-rates-validation-rules/temando'
    }
};

require.config(config);
})();
(function() {
/**
 * @copyright  Vertex. All rights reserved.  https://www.vertexinc.com/
 * @author     Mediotype                     https://www.mediotype.com/
 */

var config = {
    map: {
        '*': {
            'set-checkout-messages': 'Vertex_Tax/js/model/set-checkout-messages'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    deps: [
        'Magento_Theme/js/responsive',
        'Magento_Theme/js/theme'
    ]
};

require.config(config);
})();
(function() {
var config = {
    paths:{
        'owlCarousel':'js/owl.carousel.min',
        'lazyload':'js/jquery.lazyload-any.min',
        'readmore':'js/readmore',
        'hoverIntent': "js/hoverintent.min",
        'mansonry':'js/masonry-docs.min',
    },
    "map":{
        "*":{
            "scrollyNav":'js/scrolly-nav',
            "icTooltip":'js/ic-tooltip',
        }

    },

    config: {
        mixins: {
            'Magento_Checkout/js/view/minicart': {
                'js/view/minicart-mixin': true
            }
        }
    },

    shim: {
        'owlCarousel': {
            deps: ['jquery']
        },
        'lazyload': {
            deps: ['jquery']
        },
        'readmore': {
            deps: ['jquery']
        },
        'hoverIntent': {
            deps: ['jquery']
        },
        'mansonry': {
            deps: ['jquery', 'jquery/ui']
        }

    },
};

require.config(config);
})();



})(require);