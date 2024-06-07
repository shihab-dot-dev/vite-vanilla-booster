//tealium universal tag - utag.loader ut4.0.202402160958, Copyright 2024 Tealium.com Inc. All Rights Reserved.
var utag_condload = false;
window.__tealium_twc_switch = false;
console.log("test utag js for digi connect");
try {
    try {
        function setDataLayer() {
            console.log("from setdaa layer ");
            var a_pageName = "";
            if ((typeof document.querySelector("meta[property='og:title']") != "undefined") && (typeof document.querySelector("meta[property='og:title']") !== undefined) && (document.querySelector("meta[property='og:title']") !== null)) {
                if (document.querySelector("meta[property='og:title']").hasAttribute("content") === true) {
                    a_pageName = document.querySelector("meta[property='og:title']").getAttribute("content");
                }
            }
            var a_pageDomain = document.location.href;
            var a_pageTitle = document.title;
            var a_pageLanguage = "";
            var a_pageCountry = "";
            var a_pageCategory = "";
            var a_pageSubcategory = "";
            var a_pageTertiaryCategory = "";
            var a_pageIdentifier = "";
            var a_pageType = "generic";
            var a_orientation = window.innerWidth > window.innerHeight ? "landscape" : "portrait";
            var a_pagepath = window.location.pathname.split('/');
            if (a_pagepath.length > 0) {
                if (a_pagepath[a_pagepath.length - 1].endsWith('.html')) {
                    a_pagepath[a_pagepath.length - 1] = a_pagepath[a_pagepath.length - 1].replace(".html", "");
                }
                if (a_pagepath[a_pagepath.length - 1].endsWith('.asp')) {
                    a_pagepath[a_pagepath.length - 1] = a_pagepath[a_pagepath.length - 1].replace(".asp", "");
                }
                if (a_pagepath[0] === "") {
                    a_pagepath.splice(0, 1);
                }
            }
            var a_siteSection1 = (a_pagepath.length > 0) ? a_pagepath[0] : "";
            var a_siteSection2 = (a_pagepath.length > 1) ? a_pagepath[1] : "";
            var a_siteSection3 = (a_pagepath.length > 2) ? a_pagepath[2] : "";
            var a_siteSection4 = (a_pagepath.length > 3) ? a_pagepath[3] : "";
            var a_siteSection5 = (a_pagepath.length > 4) ? a_pagepath[4] : "";
            if ((a_pageDomain.indexOf("basf.com") !== -1) || (a_pageDomain.indexOf("basf.mrm-client.com") !== -1)) {
                a_pageLanguage = a_siteSection1;
                a_pageCountry = a_siteSection2;
                a_pageCategory = a_siteSection3;
                a_pageSubcategory = a_siteSection4;
                a_pageTertiaryCategory = a_siteSection5;
            }
            if ((a_pageDomain.indexOf("basf.us") !== -1) || (a_pageDomain.indexOf("basf-showcaseplots.com") !== -1) || (a_pageDomain.indexOf("revxfield.com") !== -1) || (a_pageDomain.indexOf("engeniaherbicide.com") !== -1) || (a_pageDomain.indexOf("growsmartlive.com") !== -1) || (a_pageDomain.indexOf("revysolpathfinder.com") !== -1) || (a_pageDomain.indexOf("learnthelibertyadvantage.com") !== -1) || (a_pageDomain.indexOf("basfretailfirst.com") !== -1) || (a_pageDomain.indexOf("operationweederadication.com") !== -1) || (a_pageDomain.indexOf("termidorhome.com") !== -1)) {
                a_pageLanguage = "";
                a_pageCountry = "";
                a_pageCategory = a_siteSection1;
                if ((document.location.pathname == "/") || (document.location.pathname == "/content/basf/cxm/agriculture/us/en/agriculture.html")) {
                    a_pageCategory = "homepage";
                }
                a_pageSubcategory = a_siteSection2;
                if ((document.location.pathname == "/content/basf/cxm/agriculture/us/en/agriculture.html")) {
                    a_pageSubcategory = "";
                }
            }
            var a_userId = "unknown user id";
            var a_customerId = "unknown customer id";
            var a_basfId = "unknown basf id";
            var a_accountId = "unknown account id";
            var a_accountType = "unknown account type";
            var a_customerIndustry = "unknown customer industry";
            if (typeof (partnerApp) != "undefined" && (partnerApp) !== null) {
                if (typeof (partnerApp.loginToken) != "undefined" && (partnerApp.loginToken) !== null) {
                    if (typeof (partnerApp.loginToken.accounts) != "undefined" && (partnerApp.loginToken.accounts) !== null) {
                        if (typeof (partnerApp.loginToken.accounts.length) !== 0) {
                            if (typeof (partnerApp.loginToken.accounts[0].basfId) != "undefined" && (partnerApp.loginToken.accounts[0].basfId) !== null) {
                                a_basfId = partnerApp.loginToken.accounts[0].basfId;
                                a_customerId = a_basfId;
                            }
                        }
                    }
                }
            }
            if (typeof (partnerApp) != "undefined" && (partnerApp) !== null) {
                if (typeof (partnerApp.loginToken) != "undefined" && (partnerApp.loginToken) !== null) {
                    if (typeof (partnerApp.loginToken.accounts) != "undefined" && (partnerApp.loginToken.accounts) !== null) {
                        if (typeof (partnerApp.loginToken.accounts.length) !== 0) {
                            if (typeof (partnerApp.loginToken.accounts[0].accountId) != "undefined" && (partnerApp.loginToken.accounts[0].accountId) !== null) {
                                a_accountId = partnerApp.loginToken.accounts[0].accountId;
                            }
                        }
                    }
                }
            }
            if (typeof (partnerApp) != "undefined" && (partnerApp) !== null) {
                if (typeof (partnerApp.loginToken) != "undefined" && (partnerApp.loginToken) !== null) {
                    if (typeof (partnerApp.loginToken.accounts) != "undefined" && (partnerApp.loginToken.accounts) !== null) {
                        if (typeof (partnerApp.loginToken.accounts.length) !== 0) {
                            if (typeof (partnerApp.loginToken.accounts[0].accTypeName) != "undefined" && (partnerApp.loginToken.accounts[0].accTypeName) !== null) {
                                a_accountType = partnerApp.loginToken.accounts[0].accTypeName;
                            }
                        }
                    }
                }
            }
            if (typeof (partnerApp) != "undefined" && (partnerApp) !== null) {
                if (typeof (partnerApp.loginToken) != "undefined" && (partnerApp.loginToken) !== null) {
                    if (typeof (partnerApp.loginToken.user) != "undefined" && (partnerApp.loginToken.user) !== null) {
                        if (typeof (partnerApp.loginToken.user.contactId) != "undefined" && (partnerApp.loginToken.user.contactId) !== null) {
                            a_userId = partnerApp.loginToken.user.contactId;
                        }
                    }
                }
            }
            if (typeof (partnerApp) != "undefined" && (partnerApp) !== null) {
                if (typeof (partnerApp.loginToken) != "undefined" && (partnerApp.loginToken) !== null) {
                    if (typeof (partnerApp.loginToken.user) != "undefined" && (partnerApp.loginToken.user) !== null) {
                        var fetchCustomerIndustry = localStorage.getItem('currCustomerIndustry')
                        if(typeof fetchCustomerIndustry != "undefined" && fetchCustomerIndustry !== null){
                            a_customerIndustry = fetchCustomerIndustry;
                            console.log("a_customerIndustry", a_customerIndustry);
                        }
                    }
                }
            }
            if (typeof (customerApp) != "undefined" && (customerApp) !== null) {
                if (typeof (customerApp.loginToken) != "undefined" && (customerApp.loginToken) !== null) {
                    if (typeof (customerApp.loginToken.accounts) != "undefined" && (customerApp.loginToken.accounts) !== null) {
                        if (typeof (customerApp.loginToken.accounts.length) !== 0) {
                            if (typeof (customerApp.loginToken.accounts[0].basfId) != "undefined" && (customerApp.loginToken.accounts[0].basfId) !== null) {
                                a_basfId = customerApp.loginToken.accounts[0].basfId;
                                a_customerId = a_basfId;
                            }
                        }
                    }
                }
            }
            if (typeof (customerApp) != "undefined" && (customerApp) !== null) {
                if (typeof (customerApp.loginToken) != "undefined" && (customerApp.loginToken) !== null) {
                    if (typeof (customerApp.loginToken.accounts) != "undefined" && (customerApp.loginToken.accounts) !== null) {
                        if (typeof (customerApp.loginToken.accounts.length) !== 0) {
                            if (typeof (customerApp.loginToken.accounts[0].accountId) != "undefined" && (customerApp.loginToken.accounts[0].accountId) !== null) {
                                a_accountId = customerApp.loginToken.accounts[0].accountId;
                            }
                        }
                    }
                }
            }
            if (typeof (customerApp) != "undefined" && (customerApp) !== null) {
                if (typeof (customerApp.loginToken) != "undefined" && (customerApp.loginToken) !== null) {
                    if (typeof (customerApp.loginToken.accounts) != "undefined" && (customerApp.loginToken.accounts) !== null) {
                        if (typeof (customerApp.loginToken.accounts.length) !== 0) {
                            if (typeof (customerApp.loginToken.accounts[0].accTypeName) != "undefined" && (customerApp.loginToken.accounts[0].accTypeName) !== null) {
                                a_accountType = customerApp.loginToken.accounts[0].accTypeName;
                            }
                        }
                    }
                }
            }
            if (typeof (customerApp) != "undefined" && (customerApp) !== null) {
                if (typeof (customerApp.loginToken) != "undefined" && (customerApp.loginToken) !== null) {
                    if (typeof (customerApp.loginToken.user) != "undefined" && (customerApp.loginToken.user) !== null) {
                        if (typeof (customerApp.loginToken.user.contactId) != "undefined" && (customerApp.loginToken.user.contactId) !== null) {
                            a_userId = customerApp.loginToken.user.contactId;
                        }
                    }
                }
            }
            if (typeof (salesxApp) != "undefined" && (salesxApp) !== null) {
                if (typeof (salesxApp.loginToken) != "undefined" && (salesxApp.loginToken) !== null) {
                    if (typeof (salesxApp.loginToken.accounts) != "undefined" && (salesxApp.loginToken.accounts) !== null) {
                        if (typeof (salesxApp.loginToken.accounts.length) !== 0) {
                            if (typeof (salesxApp.loginToken.accounts[0].basfId) != "undefined" && (salesxApp.loginToken.accounts[0].basfId) !== null) {
                                a_basfId = salesxApp.loginToken.accounts[0].basfId.toLowerCase();
                            }
                        }
                    }
                }
            }
            if (typeof (salesxApp) != "undefined" && (salesxApp) !== null) {
                if (typeof (salesxApp.loginToken) != "undefined" && (salesxApp.loginToken) !== null) {
                    if (typeof (salesxApp.loginToken.accounts) != "undefined" && (salesxApp.loginToken.accounts) !== null) {
                        if (typeof (salesxApp.loginToken.accounts.length) !== 0) {
                            if (typeof (salesxApp.loginToken.accounts[0].accountId) != "undefined" && (salesxApp.loginToken.accounts[0].accountId) !== null) {
                                a_accountId = salesxApp.loginToken.accounts[0].accountId.toLowerCase();
                            }
                        }
                    }
                }
            }
            if (typeof (salesxApp) != "undefined" && (salesxApp) !== null) {
                if (typeof (salesxApp.loginToken) != "undefined" && (salesxApp.loginToken) !== null) {
                    if (typeof (salesxApp.loginToken.accounts) != "undefined" && (salesxApp.loginToken.accounts) !== null) {
                        if (typeof (salesxApp.loginToken.accounts.length) !== 0) {
                            if (typeof (salesxApp.loginToken.accounts[0].accTypeName) != "undefined" && (salesxApp.loginToken.accounts[0].accTypeName) !== null) {
                                a_accountType = salesxApp.loginToken.accounts[0].accTypeName.toLowerCase();
                            }
                        }
                    }
                }
            }
            if (typeof (salesxApp) != "undefined" && (salesxApp) !== null) {
                if (typeof (utag_data) != "undefined" && (utag_data) !== null) {
                    if (typeof (utag_data.businessSegmentId) != "undefined" && (utag_data.businessSegmentId) !== null) {
                        a_accountType = utag_data.businessSegmentId.toLowerCase();
                    }
                }
            }
            if (typeof (salesxApp) != "undefined" && (salesxApp) !== null) {
                if (salesxApp.loginToken !== null) {
                    if (salesxApp.loginToken.userId.length !== 0 && salesxApp.loginToken.userId !== null) {
                        a_customerId = salesxApp.loginToken.userId;
                    }
                    if (salesxApp.loginToken.roles.length !== 0 && salesxApp.loginToken.roles !== null) {
                        if (salesxApp.loginToken.roles[0].cxmRole !== null) {
                            a_userId = salesxApp.loginToken.roles[0].cxmRole.toLowerCase();
                        }
                    }
                }
            }
            if (typeof (salesxApp) != "undefined" && (salesxApp) !== null) {
                if (typeof (utag_data) != "undefined" && (utag_data) !== null) {
                    if (typeof (utag_data.id) != "undefined" && (utag_data.id) !== null) {
                        a_customerId = utag_data.id;
                    }
                }
            }
            if (typeof (salesxApp) != "undefined" && (salesxApp) !== null) {
                if (typeof (utag_data) != "undefined" && (utag_data) !== null) {
                    if (typeof (utag_data.persona) != "undefined" && (utag_data.persona) !== null) {
                        a_userId = utag_data.persona.toLowerCase();
                    }
                }
            }
            var a_utag_data = {
                campaign_id: "",
                campaign_medium: "",
                campaign_source: "",
                campaign_term: "",
                campaign_content: "",
                customer_username: "",
                customer_status: "",
                customer_email: "",
                customer_city: "",
                customer_state: "",
                customer_zip: "",
                customer_country: "",
                customer_organization: "",
                customer_region: "",
                customer_id: "",
                customer_type: "",
                event_category: "",
                event_value: "",
                event_action: "",
                event_type: "",
                page_language: "",
                page_country: "",
                page_identifier: "",
                page_name: "",
                page_category: "",
                page_subcategory: "",
                page_sub_subcategory: "",
                page_type: "",
                product_id: "",
                product_sku: "",
                product_name: "",
                product_brand: "",
                product_category: "",
                product_subcategory: "",
                product_unit_price: "",
                product_list_price: "",
                product_quantity: "",
                product_discount: "",
                product_od: "",
                product_prd: "",
                product_competitor_product: "",
                product_competitor_product_list_price: "",
                search_term: "",
                search_results: "",
                video_id: "",
                video_name: "",
                video_duration: "",
                video_offset: "",
                video_state: "",
                video_player: "",
                video_player_version: "",
                video_position: "",
                video_milestone: "",
                video_type: "",
                at_level2_numbering: "",
                at_click_level_2: "",
                at_title_url: "",
                at_custom_object: "",
                at_custom_object_click: "",
                event_name: "",
                at_url_clean: "",
                at_forcedCampaign: "",
                campaign_creation: "",
                vendor_id_variable: "",
                vendor_id_setting: "",
                onetrust_optanonCategory: "",
                onetrust_optanonAction: "",
                onetrust_optanonLabel: "",
                onetrust_event: "",
                single_page_app: "",
                optanonAction: "",
                optanonCategory: "",
                optanonLabel: "",
                page_load_time: "",
                page_privacy_policy: "",
                onetrust_domain_id: "",
                visitorContinent: "",
                visitorCountry: "",
                visitorCity: "",
                visitorState: "",
                visitorStateName: "",
                visitorZipcode: "",
                visitorTimeZone: "",
                website_governance_isPrivacyStatement: "",
                accountid: "",
                accounttype: "",
                hierarchylevel: "",
                customer_industry: "",
                customer_department: "",
                businessSegmentId: "",
                page_category_name: "",
                link_type: "",
                basfid: "",
                id: ""
            };
            window.utag_data = window.utag_data || a_utag_data;
            if ((typeof a_pageName == "undefined" || a_pageName === "") && (typeof a_pageTitle != "undefined" && a_pageTitle !== "")) {
                window.utag_data.page_name = encodeURIComponent(a_pageTitle);
            }
            if (typeof a_pageName != "undefined" && a_pageName !== "") {
                window.utag_data.page_name = encodeURIComponent(a_pageName);
            }
            if ((!window.utag_data.page_type) || (window.utag_data.page_type === "") || (window.utag_data.page_type === null)) {
                window.utag_data.page_type = a_pageType;
            }
            if ((!window.utag_data.page_language) || (window.utag_data.page_language === "") || (window.utag_data.page_language === null)) {
                window.utag_data.page_language = a_pageLanguage;
            }
            if ((!window.utag_data.page_country) || (window.utag_data.page_country === "") || (window.utag_data.page_country === null)) {
                window.utag_data.page_country = a_pageCountry;
            }
            if ((!window.utag_data.page_category) || (window.utag_data.page_category === "") || (window.utag_data.page_category === null)) {
                window.utag_data.page_category = a_pageCategory;
            }
            if ((!window.utag_data.page_subcategory) || (window.utag_data.page_subcategory === "") || (window.utag_data.page_subcategory === null)) {
                window.utag_data.page_subcategory = a_pageSubcategory;
            }
            if (!window.utag_data.page_sub_subcategory || window.utag_data.page_sub_subcategory === "" || window.utag_data.page_sub_subcategory === null) {
                window.utag_data.page_sub_subcategory = a_pageTertiaryCategory;
            }
            if ((typeof (window.utag_data.customer_id) == "undefined") || (window.utag_data.customer_id === "unknown customer id") || (window.utag_data.customer_id === "") || (window.utag_data.customer_id === null)) {
                window.utag_data.customer_id = a_customerId;
            }
            if ((typeof (window.utag_data.customer_organization) == "undefined") || (window.utag_data.customer_organization === "unknown user id") || (window.utag_data.customer_organization === "") || (window.utag_data.customer_organization === null)) {
                window.utag_data.customer_organization = a_userId;
            }
            if ((typeof (window.utag_data.customer_type) == "undefined") || (window.utag_data.customer_type === "unknown account type") || (window.utag_data.customer_type === "") || (window.utag_data.customer_type === null)) {
                window.utag_data.customer_type = a_accountType;
            }
            // test 
             if ((typeof (window.utag_data.customer_industry) == "undefined") || (window.utag_data.customer_industry === "unknown customer industry") || (window.utag_data.customer_industry === "") || (window.utag_data.customer_industry === null)) {
                window.utag_data.customer_industry = a_customerIndustry;
                console.log('logging utag custiomer industry', window.utag_data.customer_industry);
            }
        }
        setDataLayer();
        var a_intervId;
        var a_appObjectFlag = 0;
        var a_currentDomain = document.location.hostname;
        if ((a_currentDomain.indexOf("experience-dev01.basf.mrm-client.com") !== -1) || (a_currentDomain.indexOf("experience-dev02.basf.mrm-client.com") !== -1) || (a_currentDomain.indexOf("experience-dev03.basf.mrm-client.com") !== -1) || (a_currentDomain.indexOf("experience-stage02.basf.com") !== -1) || (a_currentDomain.indexOf("experience-itl02.basf.mrm-client.com") !== -1) || (a_currentDomain.indexOf("experience.basf.com") !== -1)) {
            if (!a_intervId) {
                a_intervId = setInterval(function() {
                    console.log("salesxApp object polled every 2 seconds");
                    if (typeof (salesxApp) !== "undefined") {
                        a_appObjectFlag = 1;
                        setDataLayer();
                        var a_appGlobalObjectChangeTrigger = new CustomEvent('App Global Object Change');
                        window.dispatchEvent(a_appGlobalObjectChangeTrigger);
                        window.utag_data.app_object_flag = a_appObjectFlag;
                        console.log('salesxApp Object Change Event Dispatched!');
                        console.log("a_appObjectFlag: " + a_appObjectFlag);
                        window.utag.view(utag_data);
                        console.log("window.utag.view(utag_data) EXECUTED");
                    }
                }, 2000);
            }
        }
        if ((a_currentDomain.indexOf("experience-dev.partnerportal.basf.com") !== -1) || (a_currentDomain.indexOf("experience-stage.partnerportal.basf.com") !== -1) || (a_currentDomain.indexOf("experience.partnerportal.basf.com") !== -1)) {
            if (!a_intervId) {
                a_intervId = setInterval(function() {
                    console.log("partnerApp object polled every 2 seconds");
                    if (typeof (partnerApp) !== "undefined") {
                        a_appObjectFlag = 1;
                        setDataLayer();
                        var a_appGlobalObjectChangeTrigger = new CustomEvent('App Global Object Change');
                        window.dispatchEvent(a_appGlobalObjectChangeTrigger);
                        window.utag_data.app_object_flag = a_appObjectFlag;
                        console.log('partnerApp Object Change Event Dispatched!');
                        console.log("a_appObjectFlag: " + a_appObjectFlag);
                        window.utag.view(utag_data);
                        console.log("window.utag.view(utag_data) EXECUTED");
                    }
                }, 2000);
            }
        }
        if ((a_currentDomain.indexOf("experience-dev.customerportal.basf.com") !== -1) || (a_currentDomain.indexOf("experience-stage.customerportal.basf.com") !== -1) || (a_currentDomain.indexOf("experience.customerportal.basf.com") !== -1)) {
            if (!a_intervId) {
                a_intervId = setInterval(function() {
                    console.log("customerApp object polled every 2 seconds");
                    if (typeof (customerApp) !== "undefined") {
                        a_appObjectFlag = 1;
                        setDataLayer();
                        var a_appGlobalObjectChangeTrigger = new CustomEvent('App Global Object Change');
                        window.dispatchEvent(a_appGlobalObjectChangeTrigger);
                        window.utag_data.app_object_flag = a_appObjectFlag;
                        console.log('customerApp Object Change Event Dispatched!');
                        console.log("a_appObjectFlag: " + a_appObjectFlag);
                        window.utag.view(utag_data);
                        console.log("window.utag.view(utag_data) EXECUTED");
                    }
                }, 2000);
            }
        }
        window.addEventListener("App Global Object Change", function() {
            clearInterval(a_intervId);
            a_intervId = null;
            console.log("Interval cleared at App Global Object Change");
            console.log("a_appObjectFlag: " + a_appObjectFlag);
            console.log("a_intervId: " + a_intervId);
            console.log("utag_data UDO VAR page_name: " + window.utag_data.page_name);
            console.log("utag_data UDO VAR page_type: " + window.utag_data.page_type);
            console.log("utag_data UDO VAR page_language: " + window.utag_data.page_language);
            console.log("utag_data UDO VAR page_country: " + window.utag_data.page_country);
            console.log("utag_data UDO VAR page_category: " + window.utag_data.page_category);
            console.log("utag_data UDO VAR page_subcategory: " + window.utag_data.page_subcategory);
            console.log("utag_data UDO VAR page_tertiarycategory: " + window.utag_data.page_tertiarycategory);
            console.log("utag_data UDO VAR customer_id: " + window.utag_data.customer_id);
            console.log("utag_data UDO VAR customer_organization: " + window.utag_data.customer_organization);
            console.log("utag_data UDO VAR customer_type: " + window.utag_data.customer_type);
        });
    } catch (e) {
        console.log(e)
    }
} catch (e) {
    console.log(e);
}
if (!utag_condload) {
    try {
        try {
            var a_linksArrayRaw;
            var a_linksArray;
            var a_buttonsArrayRaw;
            var a_buttonsArray;
            var a_inputsArrayRaw;
            var a_inputsArray;
            var a_textareasArrayRaw;
            var a_textareasArray;
            var a_selectsArrayRaw;
            var a_selectsArray;
            var a_ddArrayRaw;
            var a_ddArray;
            var a_currentDomain = document.location.hostname;
            var a_intervId;
            if (!a_intervId) {
                a_intervId = setInterval(function() {
                    if (document.querySelectorAll("a").length !== 0) {
                        document.a_linksArrayRaw = document.querySelectorAll("a");
                        document.a_linksArray = Array.from(document.a_linksArrayRaw);
                        console.log("a_linksArray Length at Preload after 2 seconds: " + document.a_linksArray.length);
                        document.a_linksArray.forEach(a_createAnalyticsDataAttribrutes);
                    }
                    if (document.querySelectorAll("button").length !== 0) {
                        document.a_buttonsArrayRaw = document.querySelectorAll("button");
                        document.a_buttonsArray = Array.from(document.a_buttonsArrayRaw);
                        console.log("a_buttonsArray Length at Preload after 2 seconds: " + document.a_buttonsArray.length);
                        document.a_buttonsArray.forEach(a_createAnalyticsDataAttribrutes);
                    }
                    if (document.querySelectorAll("input:not(cxm-field-forecast-brand-summary input)").length !== 0) {
                        document.a_inputsArrayRaw = document.querySelectorAll("input");
                        document.a_inputsArray = Array.from(document.a_inputsArrayRaw);
                        console.log("a_inputsArray Length at Preload after 2 seconds: " + document.a_inputsArray.length);
                        document.a_inputsArray.forEach(a_createAnalyticsDataAttribrutes);
                    }
                    if (document.querySelectorAll("textarea:not(cxm-field-forecast-brand-summary textarea)").length !== 0) {
                        document.a_textareasArrayRaw = document.querySelectorAll("textarea");
                        document.a_textareasArray = Array.from(document.a_textareasArrayRaw);
                        console.log("a_textareasArray Length at Preload after 2 seconds: " + document.a_textareasArray.length);
                        document.a_textareasArray.forEach(a_createAnalyticsDataAttribrutes);
                    }
                    if (document.querySelectorAll("select:not(cxm-field-forecast-brand-summary select)").length !== 0) {
                        document.a_selectsArrayRaw = document.querySelectorAll("select");
                        document.a_selectsArray = Array.from(document.a_selectsArrayRaw);
                        console.log("a_selectsArray Length at Preload after 2 seconds: " + document.a_selectsArray.length);
                        document.a_selectsArray.forEach(a_createAnalyticsDataAttribrutes);
                    }
                    console.log("Interactive Elements Scraped (every 2 seconds)");
                }, 2000);
            }
            setTimeout(function() {
                clearInterval(a_intervId);
                a_intervId = null;
                console.log("Interactive Elements Scraping Stopped (after 30 seconds)");
            }, 30000);
            function a_createAnalyticsDataAttribrutes(item, index) {
                if (item.offsetParent !== null) {
                    var element = jQuery(item);
                    var nodeType;
                    var elementType;
                    var elementState;
                    var elementAction;
                    var elementText;
                    var elementIcon;
                    var elementCTA;
                    var elementName;
                    var elementDataDisplayName;
                    var elementDataNamePlaceholder;
                    var elementDataSlideTo;
                    var elementDataApiIgnore;
                    var elementVal;
                    var elementLabel;
                    var elementPageSection;
                    var formFieldName;
                    var imageFilePath;
                    var imageFilename;
                    var imageAlt;
                    var imageTitle;
                    var svgDetails;
                    var checkboxState;
                    var checkboxAction;
                    var checkboxesItemsSelected;
                    var multiSelectItemsSelected;
                    var toggleTitle;
                    var toggleState;
                    var toggleAction;
                    var clickStr;
                    var clickDetails;
                    var a_tealiumValue;
                    var a_tealiumValueAtt;
                    var a_tealiumCategory;
                    var a_tealiumCategoryAtt;
                    var a_tealiumType;
                    var a_tealiumTypeAtt;
                    var a_tealiumAction;
                    var a_tealiumActionAtt;
                    var destinationUrl;
                    var a_currentDomain = document.location.hostname;
                    var a_elementText = element.text().trim();
                    var a_elementDestinationURL = "unknown a_elementDestinationURL";
                    if ((typeof (item.href) !== "undefined") && (typeof (item.href) !== undefined)) {
                        a_elementDestinationURL = encodeURIComponent(item.href);
                    } else if ((typeof (element.attr("onclick")) !== "undefined") && (typeof (element.attr("onclick")) !== undefined)) {
                        a_elementDestinationURL = encodeURIComponent(element.attr("onclick").toString());
                    }
                    destinationUrl = a_elementDestinationURL;
                    if (!element.attr("type")) {
                        nodeType = element.prop("nodeName");
                    } else if (element.attr("type")) {
                        nodeType = element.prop("nodeName") + "_" + element.attr("type");
                    } else {
                        nodeType = "Input";
                    }
                    elementType = nodeType;
                    if ((elementType.indexOf("INPUT") === -1) && (elementType.indexOf("TEXTAREA") === -1) && (elementType.indexOf("SELECT") === -1)) {
                        if (element.text().length !== 0) {
                            elementType = "Text Link";
                            elementText = element.text().trim();
                            elementCTA = elementText;
                        }
                    }
                    if (element.closest("#optanon-popup-bottom-logo").length !== 0) {
                        elementType = "Text Link";
                        elementText = "Powered by OneTrust";
                        elementCTA = elementText;
                    }
                    if (element.prop("tagName") == "IMG") {
                        elementType = "Image Link";
                        if (typeof (element.attr("src")) != "undefined") {
                            imageFilePath = element.attr("src").toLowerCase();
                            imageFilename = imageFilePath.split("/").pop();
                            elementCTA = imageFilename;
                        }
                        if (typeof (element.attr("srcset")) != "undefined") {
                            imageFilePath = element.attr("srcset").toLowerCase();
                            imageFilename = imageFilePath.split("/").pop();
                            imageFilename = imageFilename.replace(" 1512w", "");
                            elementCTA = imageFilename;
                        }
                    }
                    if (element.find("img.main-logo").length !== 0) {
                        if (typeof (element.find("img.main-logo").attr("src")) != "undefined") {
                            imageFilePath = element.find("img.main-logo").attr("src").toLowerCase();
                            imageFilename = imageFilePath.split("/").pop();
                            elementCTA = imageFilename;
                        }
                    }
                    if (element.find("img.basf-logo").length !== 0) {
                        if (typeof (element.find("img.basf-logo").attr("src")) != "undefined") {
                            imageFilePath = element.find("img.basf-logo").attr("src").toLowerCase();
                            imageFilename = imageFilePath.split("/").pop();
                            elementCTA = imageFilename;
                        }
                    }
                    if (element.closest("[data-type='iframe-video']").length !== 0) {
                        if (element.find("img").length !== 0) {
                            if (typeof (element.find("img").attr("src")) != "undefined") {
                                imageFilePath = element.find("img").attr("src").toLowerCase();
                                imageFilename = imageFilePath.split("/").pop();
                                elementCTA = imageFilename;
                            }
                        }
                    }
                    if (element.prop("tagName") == "svg") {
                        elementType = "Image Link";
                        if (element.hasClass("fa-toggle-off")) {
                            svgDetails = "fa-toggle-off";
                        }
                        if (element.hasClass("fa-toggle-on")) {
                            svgDetails = "fa-toggle-on";
                        }
                        if (element.hasClass("os-mode-grid")) {
                            svgDetails = "os-mode-grid";
                        }
                        if (element.hasClass("os-mode-list")) {
                            svgDetails = "os-mode-list";
                        }
                        if (element.closest(".minus-button").length !== 0) {
                            svgDetails = "minus-button";
                        }
                        if (element.closest(".plus-button").length !== 0) {
                            svgDetails = "plus-button";
                        }
                        elementCTA = svgDetails;
                    }
                    if (element.prop("tagName") == "path") {
                        elementType = "Image Link";
                        if (element.closest(".os-mode-grid").length !== 0) {
                            elementCTA = "Grid Button (Path)";
                        }
                        if (element.closest(".os-mode-list").length !== 0) {
                            elementCTA = "List Button (Path)";
                        }
                    }
                    if (element.prop("tagName") == "BUTTON") {
                        elementType = "Button";
                        if (element.closest(".minus-button").length !== 0) {
                            elementCTA = "minus-button";
                        }
                        if (element.closest(".plus-button").length !== 0) {
                            elementCTA = "plus-button";
                        }
                    }
                    if ((element.hasClass("btn")) && (element.prop("tagName") !== "BUTTON")) {
                        elementType = "Text Link (btn)";
                    }
                    if ((element.hasClass("xBluePill")) && (element.prop("tagName") !== "BUTTON")) {
                        elementType = "Text Link (btn)";
                    }
                    if ((element.hasClass("xPagingButton")) && (element.prop("tagName") !== "BUTTON")) {
                        elementType = "Text Link (btn)";
                    }
                    if (element.prop("tagName") == "LI") {
                        elementType = "Li Link";
                    }
                    if (element.prop("tagName") == "UL") {
                        elementType = "Ul Link";
                    }
                    if ((element.closest(".icon-menu").length !== 0)) {
                        elementType = "Icon Link";
                        elementIcon = "icon-menu (Sandwich Icon)";
                        elementCTA = elementIcon;
                    }
                    if ((element.closest(".icon--menu").length !== 0)) {
                        elementType = "Icon Link";
                        elementIcon = "icon--menu (Sandwich Icon)";
                        elementCTA = elementIcon;
                    }
                    if ((element.find(".close-new").length !== 0)) {
                        elementType = "Icon Link";
                        elementIcon = "close-new (X Icon)";
                        elementCTA = elementIcon;
                    }
                    if ((element.closest(".icon-close").length !== 0)) {
                        elementType = "Icon Link";
                        elementIcon = "icon-close (X Icon)";
                        elementCTA = elementIcon;
                    }
                    if ((element.closest(".icon--close").length !== 0) || (element.hasClass("mfp-close"))) {
                        elementType = "Icon Link";
                        elementIcon = "icon--close (X Icon)";
                        elementCTA = elementIcon;
                    }
                    if (element.closest(".icon-search").length !== 0) {
                        elementType = "Icon Link";
                        elementIcon = "icon-search (Magnifying Glass)";
                        elementCTA = elementIcon;
                    }
                    if (element.closest(".icon--search").length !== 0) {
                        elementType = "Icon Link";
                        elementIcon = "icon--search (Magnifying Glass)";
                        elementCTA = elementIcon;
                    }
                    if (element.closest(".preview").length !== 0) {
                        elementType = "Icon Link";
                        elementIcon = "icon-eye";
                        elementCTA = elementIcon;
                    }
                    if (element.closest(".download-new").length !== 0) {
                        elementType = "Icon Link";
                        elementIcon = "icon-download-new";
                        elementCTA = elementIcon;
                    }
                    if (element.closest(".icon-arrow-up").length !== 0) {
                        elementType = "Icon Link";
                        elementIcon = "icon-arrow-up";
                        elementCTA = elementIcon;
                    }
                    if (element.closest(".icon-arrow-down").length !== 0) {
                        elementType = "Icon Link";
                        elementIcon = "icon-arrow-down";
                        elementCTA = elementIcon;
                    }
                    if (element.closest(".icon-arrow-left").length !== 0) {
                        elementType = "Icon Link";
                        elementIcon = "icon-arrow-left";
                        elementCTA = elementIcon;
                    }
                    if (element.closest(".icon-arrow-right").length !== 0) {
                        elementType = "Icon Link";
                        elementIcon = "icon-arrow-right";
                        elementCTA = elementIcon;
                    }
                    if (element.closest(".angle-left-circle").length !== 0) {
                        elementType = "Icon Link";
                        elementIcon = "icon-angle-left-circle";
                        elementCTA = elementIcon;
                    }
                    if (element.closest(".angle-right-circle").length !== 0) {
                        elementType = "Icon Link";
                        elementIcon = "icon-angle-right-circle";
                        elementCTA = elementIcon;
                    }
                    if (element.closest(".icon-play").length !== 0) {
                        elementType = "Icon Link";
                        elementIcon = "icon-play";
                        elementCTA = elementIcon;
                    }
                    if (element.closest(".icon--play").length !== 0) {
                        elementType = "Icon Link";
                        elementIcon = "icon--play";
                        elementCTA = elementIcon;
                    }
                    if (element.closest(".icon_play").length !== 0) {
                        elementType = "Icon Link";
                        elementIcon = "icon_play";
                        elementCTA = elementIcon;
                    }
                    if (element.closest(".hubPlayIcon").length !== 0) {
                        elementType = "Icon Link";
                        elementIcon = "hubPlayIcon";
                        elementCTA = elementIcon;
                    }
                    if (element.closest(".hub2PlayIcon").length !== 0) {
                        elementType = "Icon Link";
                        elementIcon = "hub2PlayIcon";
                        elementCTA = elementIcon;
                    }
                    if (element.closest(".icon-facebook").length !== 0) {
                        elementType = "Icon Link";
                        elementIcon = "icon-facebook";
                        elementCTA = elementIcon;
                    }
                    if (element.closest(".icon-twitter").length !== 0) {
                        elementType = "Icon Link";
                        elementText = "icon-twitter";
                        elementIcon = elementIcon;
                    }
                    if (element.closest(".icon-youtube").length !== 0) {
                        elementType = "Icon Link";
                        elementIcon = "icon-youtube";
                        elementCTA = elementIcon;
                    }
                    if (element.closest(".icon-instagram").length !== 0) {
                        elementType = "Icon Link";
                        elementIcon = "icon-instagram";
                        elementCTA = elementIcon;
                    }
                    if (element.closest(".icon-pinterest").length !== 0) {
                        elementType = "Icon Link";
                        elementIcon = "icon-pinterest";
                        elementCTA = elementIcon;
                    }
                    if (element.closest(".icon-linkedin").length !== 0) {
                        elementType = "Icon Link";
                        elementIcon = "icon-linkedIn";
                        elementCTA = elementIcon;
                    }
                    if (element.closest(".icon--facebook").length !== 0) {
                        elementType = "Icon Link";
                        elementIcon = "icon--facebook";
                        elementCTA = elementIcon;
                    }
                    if (element.closest(".icon--twitter").length !== 0) {
                        elementType = "Icon Link";
                        elementIcon = "icon--twitter";
                        elementCTA = elementIcon;
                    }
                    if (element.closest(".icon--instagram").length !== 0) {
                        elementType = "Icon Link";
                        elementIcon = "icon--instagram";
                        elementCTA = elementIcon;
                    }
                    if (element.closest(".icon--pinterest").length !== 0) {
                        elementType = "Icon Link";
                        elementIcon = "icon--pinterest";
                        elementCTA = elementIcon;
                    }
                    if (element.closest(".icon--linkedin").length !== 0) {
                        elementType = "Icon Link";
                        elementIcon = "icon--linkedin";
                        elementCTA = elementIcon;
                    }
                    if (element.closest(".at-icon-facebook").length !== 0) {
                        elementType = "Icon Link";
                        elementIcon = "at-icon-facebook";
                        elementCTA = elementIcon;
                    }
                    if (element.closest(".at-icon-twitter").length !== 0) {
                        elementType = "Icon Link";
                        elementIcon = "at-icon-twitter";
                        elementCTA = elementIcon;
                    }
                    if (element.closest(".at-icon-instagram").length !== 0) {
                        elementType = "Icon Link";
                        elementIcon = "at-icon-instagram";
                        elementCTA = elementIcon;
                    }
                    if (element.closest(".at-icon-pinterest").length !== 0) {
                        elementType = "Icon Link";
                        elementIcon = "at-icon-pinterest";
                        elementCTA = elementIcon;
                    }
                    if (element.closest(".at-icon-linkedin").length !== 0) {
                        elementType = "Icon Link";
                        elementIcon = "at-icon-linkedin";
                        elementCTA = elementIcon;
                    }
                    if (element.closest(".icon_facebook").length !== 0) {
                        elementType = "Icon Link";
                        elementIcon = "icon_facebook";
                        elementCTA = elementIcon;
                    }
                    if (element.closest(".icon_twitter").length !== 0) {
                        elementType = "Icon Link";
                        elementIcon = "icon_twitter";
                        elementCTA = elementIcon;
                    }
                    if (element.closest(".icon_instagram").length !== 0) {
                        elementType = "Icon Link";
                        elementIcon = "icon_instagram";
                        elementCTA = elementIcon;
                    }
                    if (element.closest(".icon_pinterest").length !== 0) {
                        elementType = "Icon Link";
                        elementIcon = "icon_pinterest";
                        elementCTA = elementIcon;
                    }
                    if (element.closest(".icon_linkedin").length !== 0) {
                        elementType = "Icon Link";
                        elementIcon = "icon_linkedin";
                        elementCTA = elementIcon;
                    }
                    if ((elementCTA == "undefined") || (elementCTA === undefined)) {
                        if (element.find(".icon.download-new").length !== 0) {
                            elementType = "Icon Link";
                            elementIcon = "icon-download-new";
                            elementCTA = elementIcon;
                        }
                        if (element.find(".icon.preview").length !== 0) {
                            elementType = "Icon Link";
                            elementIcon = "icon-eye";
                            elementCTA = elementIcon;
                        }
                        if (element.find(".icon.angle-left-circle").length !== 0) {
                            elementType = "Icon Link";
                            elementIcon = "icon-angle-left-circle";
                            elementCTA = elementIcon;
                        }
                        if (element.find(".icon.angle-right-circle").length !== 0) {
                            elementType = "Icon Link";
                            elementIcon = "icon-angle-right-circle";
                            elementCTA = elementIcon;
                        }
                    }
                    if (element.closest(".icon--left").length !== 0) {
                        elementType = "Icon Link";
                        elementIcon = "icon--left";
                        elementCTA = elementIcon;
                    }
                    if (element.closest(".icon--left-l").length !== 0) {
                        elementType = "Icon Link";
                        elementIcon = "icon--left-1";
                        elementCTA = elementIcon;
                    }
                    if ((element.closest("div.scrollLeft button").length !== 0) || (element.closest("div#scrollLeft").length !== 0) || (element.closest("div.slick-slider > a.prev").length !== 0) || (element.closest("a.left").length !== 0)) {
                        elementText = "left arrow (path)";
                        if (element.hasClass("prev")) {
                            elementType = "Text Link (Btn)";
                            elementText = "icon-arrow-left";
                        }
                        if (element.text()) {
                            elementText = element.text().trim();
                        }
                    }
                    if (element.closest(".icon--right").length !== 0) {
                        elementType = "Icon Link";
                        elementIcon = "icon--right";
                        elementCTA = elementIcon;
                    }
                    if (element.closest(".icon--right-l").length !== 0) {
                        elementType = "Icon Link";
                        elementIcon = "icon--right-1";
                        elementCTA = elementIcon;
                    }
                    if ((element.closest("div.scrollRight button").length !== 0) || (element.closest("div#scrollRight").length !== 0) || (element.closest("div.slick-slider > a.next").length !== 0) || (element.closest("a.right").length !== 0)) {
                        elementText = "right arrow (path)";
                        if (element.hasClass('next')) {
                            elementType = "Text Link (Btn)";
                            elementText = "icon-arrow-right";
                        }
                        if (element.text()) {
                            elementText = element.text().trim();
                        }
                    }
                    if (element.closest(".xComboWrapper").find("input").attr("data-api-ignore")) {
                        elementDataApiIgnore = element.closest(".xComboWrapper").find("input").attr("data-api-ignore");
                        formFieldName = elementDataApiIgnore;
                        elementCTA = elementDataApiIgnore;
                    }
                    if (element.attr("data-name-placeholder")) {
                        elementDataNamePlaceholder = element.attr("data-name-placeholder");
                        formFieldName = elementDataNamePlaceholder;
                        elementCTA = elementDataNamePlaceholder;
                    }
                    if (element.attr("placeholder")) {
                        elementDataNamePlaceholder = element.attr("placeholder");
                        formFieldName = elementDataNamePlaceholder;
                        elementCTA = elementDataNamePlaceholder;
                    }
                    if (element.attr("data-display-name")) {
                        elementDataDisplayName = element.attr("data-display-name");
                        formFieldName = elementDataDisplayName;
                        elementCTA = elementDataDisplayName;
                    }
                    if (element.attr("name")) {
                        elementName = element.attr("name");
                        if (elementName == "data.programType") {
                            elementName = "Account Type";
                        }
                        formFieldName = elementName;
                        elementCTA = elementName;
                    }
                    if (element.attr("value")) {
                        elementVal = element.attr("value");
                    }
                    if (element.attr("type") == "file") {
                        formFieldName = "File Upload";
                        if (element.text()) {
                            elementText = element.text().trim();
                        } else if (element.closest("label").length !== 0) {
                            elementText = element.closest("label").text();
                        }
                        elementCTA = elementText;
                    }
                    if (element.attr("type") == "radio") {
                        if (elementDataDisplayName !== "Unknown elementDataDisplayName") {
                            elementCTA = elementDataDisplayName + "_" + elementVal;
                        } else {
                            elementCTA = elementName + "_" + elementVal;
                        }
                    } else if (element.attr("type") == "checkbox") {} else if (element.attr("type") == "text") {
                        if (elementName !== "Unknown elementName") {
                            elementCTA = elementName;
                        } else if (elementDataDisplayName !== "Unknown elementDataDisplayName") {
                            elementCTA = elementDataDisplayName;
                        } else if (elementDataNamePlaceholder !== "Unknown elementDataNamePlaceholder") {
                            elementCTA = elementDataNamePlaceholder;
                        }
                    } else if (element.attr("type") == "password") {
                        if (elementDataDisplayName !== "Unknown elementDataDisplayName") {
                            elementCTA = elementDataDisplayName;
                        } else {
                            elementCTA = elementName;
                        }
                    }
                    if (element.attr("type") == "submit") {
                        elementCTA = elementText;
                        if (elementVal != "Unknown elementVal") {
                            elementCTA = elementVal;
                        }
                    }
                    if (element.closest(".mh-main-nav-button").length !== 0) {
                        if (element.closest(".mh-main-nav-button-selected").length !== 0) {
                            expansionState = "Opened";
                            expansionAction = "Close";
                            elementType = "Image Link";
                            elementText = "X";
                            elementCTA = elementText;
                        } else {
                            expansionState = "Closed";
                            expansionAction = "Open";
                            elementType = "Image Link";
                            elementCTA = "Sandwich Icon";
                        }
                    }
                    if (element.closest(".bt-nav__toggle__btn").length !== 0) {
                        elementType = "Image Link";
                        elementCTA = "Sandwich Icon";
                    }
                    if (element.closest("label").length !== 0) {
                        elementLabel = element.closest("label").text().trim();
                        elementCTA = elementLabel;
                        if (element.closest(".tabs-switch-container").length !== 0) {
                            elementVal = elementLabel;
                        }
                    }
                    if (element.closest(".field-wrapper").length !== 0) {
                        if (element.closest(".field-wrapper").find("label").length !== 0) {
                            elementLabel = element.closest(".field-wrapper").find("label").first().text().trim();
                            elementCTA = elementLabel;
                        }
                    }
                    if (element.closest("div.checkbox-wrapper").length !== 0) {
                        if (element.closest("div.checkbox-wrapper").find("label").length !== 0) {
                            elementLabel = element.closest("div.checkbox-wrapper").find("label").text().trim();
                            elementCTA = elementLabel;
                        }
                    } else if (element.closest("div.checkbox").length !== 0) {
                        if (element.closest("div.checkbox").find("label").length !== 0) {
                            elementLabel = element.closest("div.checkbox").find("label").text().trim();
                            elementCTA = elementLabel;
                        }
                    }
                    if (item.closest("div.tile") !== null) {
                        if (item.closest("div.tile").querySelector(".teaser-title") !== null) {
                            elementPageSection = item.closest("div.tile").querySelector(".teaser-title").innerText;
                        }
                    }
                    a_tealiumValue = elementCTA + "||" + a_elementDestinationURL;
                    a_tealiumValueAtt = document.createAttribute("data-tealium-value");
                    if ((element.closest("button").length !== 0)) {
                        if ((typeof (a_elementDestinationURL) != 'undefined')) {
                            if ((a_elementDestinationURL.indexOf('.pdf') == -1) && (a_elementDestinationURL.indexOf('.doc') == -1) && (a_elementDestinationURL.indexOf('.docx') == -1) && (a_elementDestinationURL.indexOf('.jpg') == -1) && (a_elementDestinationURL.indexOf('.png') == -1) && (a_elementDestinationURL.indexOf('.svg') == -1) && (a_elementDestinationURL.indexOf('.xls') == -1) && (a_elementDestinationURL.indexOf('.xlsx') == -1) && (a_elementDestinationURL.indexOf('.ppt') == -1) && (a_elementDestinationURL.indexOf('.pptx') == -1) && (a_elementDestinationURL.indexOf('.tab') == -1) && (a_elementDestinationURL.indexOf('.csv') == -1) && (a_elementDestinationURL.indexOf('.zip') == -1) && (a_elementDestinationURL.indexOf('.txt') == -1) && (a_elementDestinationURL.indexOf('.vsd') == -1) && (a_elementDestinationURL.indexOf('.vxd') == -1) && (a_elementDestinationURL.indexOf('.xml') == -1) && (a_elementDestinationURL.indexOf('.js') == -1) && (a_elementDestinationURL.indexOf('.css') == -1) && (a_elementDestinationURL.indexOf('.rar') == -1) && (a_elementDestinationURL.indexOf('.exe') == -1) && (a_elementDestinationURL.indexOf('.wma') == -1) && (a_elementDestinationURL.indexOf('.mov') == -1) && (a_elementDestinationURL.indexOf('.avi') == -1) && (a_elementDestinationURL.indexOf('.wmv') == -1) && (a_elementDestinationURL.indexOf('.mp3') == -1) && (a_elementDestinationURL.indexOf('.wav') == -1) && (a_elementDestinationURL.indexOf('.m4v') == -1) && (a_elementDestinationURL != "")) {
                                a_tealiumValue = a_elementText;
                            }
                        }
                    }
                    if ((element.closest("input").length !== 0) || (element.closest("textarea").length !== 0) || (element.closest("select").length !== 0)) {
                        a_tealiumValue = elementCTA;
                    }
                    if (a_elementDestinationURL != "undefined") {
                        if (a_elementDestinationURL.indexOf("mailto:") !== -1) {
                            a_tealiumValue = "mailto||" + a_elementDestinationURL.split("mailto:").pop().toString();
                        }
                        if (a_elementDestinationURL.indexOf("mailto%3A") !== -1) {
                            a_tealiumValue = "mailto||" + a_elementDestinationURL.split("mailto%3A").pop().toString();
                        }
                        if (a_elementDestinationURL.indexOf("tel:") !== -1) {
                            a_tealiumValue = "tel||" + a_elementDestinationURL.split("tel:").pop().toString();
                        }
                        if (a_elementDestinationURL.indexOf("tel%3A") !== -1) {
                            a_tealiumValue = "tel||" + a_elementDestinationURL.split("tel%3A").pop().toString();
                        }
                        if (a_elementDestinationURL.indexOf("sms:") !== -1) {
                            a_tealiumValue = "sms||" + a_elementDestinationURL.split("sms:").pop().toString();
                        }
                        if (a_elementDestinationURL.indexOf("sms%3A") !== -1) {
                            a_tealiumValue = "sms||" + a_elementDestinationURL.split("sms%3A").pop().toString();
                        }
                    }
                    if (element.find(".header-link-circle").length !== 0) {
                        a_tealiumValue = "secondary flyout menu trigger";
                    }
                    if ((elementPageSection != "undefined") && (elementPageSection != null)) {
                        a_tealiumValue = elementPageSection + "_" + elementCTA;
                    }
                    if (element.closest(".header-search-icon").length !== 0) {
                        a_tealiumValue = "header search";
                    }
                    if (element.closest(".bookmarked").length !== 0) {
                        a_tealiumValue = "bookmark favorite";
                    }
                    if (element.closest(".bookmark").length !== 0) {
                        a_tealiumValue = "bookmark favorite";
                    }
                    if (element.closest("input.filter").length !== 0 && element.attr("data-key").length !== 0) {
                        a_tealiumValue = "filter search " + element.attr("data-key");
                    }
                    a_tealiumValueAtt.value = a_tealiumValue;
                    a_tealiumCategory = "links";
                    a_tealiumCategoryAtt = document.createAttribute("data-tealium-category");
                    if (element.closest(".collapsible-toggle").length !== 0) {
                        a_tealiumCategory = "content";
                    }
                    if ((element.closest("button").length !== 0) || (element.find(".header-link-circle").length !== 0)) {
                        a_tealiumCategory = "buttons";
                    }
                    if (a_elementDestinationURL != "undefined") {
                        if ((a_elementDestinationURL.indexOf("mailto:") !== -1) || (a_elementDestinationURL.indexOf("mailto%3A") !== -1) || (a_elementDestinationURL.indexOf("tel:") !== -1) || (a_elementDestinationURL.indexOf("tel%3A") !== -1) || (a_elementDestinationURL.indexOf("sms:") !== -1) || (a_elementDestinationURL.indexOf("sms%3A") !== -1)) {
                            a_tealiumCategory = "contact";
                        }
                    }
                    if ((element.closest("input").length !== 0) || (element.closest("textarea").length !== 0) || (element.closest("select").length !== 0)) {
                        a_tealiumCategory = "input";
                    }
                    if ((typeof (a_elementDestinationURL) != 'undefined') && ((a_elementDestinationURL.indexOf('.pdf') !== -1) || (a_elementDestinationURL.indexOf('.doc') !== -1) || (a_elementDestinationURL.indexOf('.docx') !== -1) || (a_elementDestinationURL.indexOf('.jpg') !== -1) || (a_elementDestinationURL.indexOf('.png') !== -1) || (a_elementDestinationURL.indexOf('.svg') !== -1) || (a_elementDestinationURL.indexOf('.xls') !== -1) || (a_elementDestinationURL.indexOf('.xlsx') !== -1) || (a_elementDestinationURL.indexOf('.ppt') !== -1) || (a_elementDestinationURL.indexOf('.pptx') !== -1) || (a_elementDestinationURL.indexOf('.tab') !== -1) || (a_elementDestinationURL.indexOf('.csv') !== -1) || (a_elementDestinationURL.indexOf('.zip') !== -1) || (a_elementDestinationURL.indexOf('.txt') !== -1) || (a_elementDestinationURL.indexOf('.vsd') !== -1) || (a_elementDestinationURL.indexOf('.vxd') !== -1) || (a_elementDestinationURL.indexOf('.xml') !== -1) || (a_elementDestinationURL.indexOf('.js') !== -1) || (a_elementDestinationURL.indexOf('.css') !== -1) || (a_elementDestinationURL.indexOf('.rar') !== -1) || (a_elementDestinationURL.indexOf('.exe') !== -1) || (a_elementDestinationURL.indexOf('.wma') !== -1) || (a_elementDestinationURL.indexOf('.mov') !== -1) || (a_elementDestinationURL.indexOf('.avi') !== -1) || (a_elementDestinationURL.indexOf('.wmv') !== -1) || (a_elementDestinationURL.indexOf('.mp3') !== -1) || (a_elementDestinationURL.indexOf('.wav') !== -1) || (a_elementDestinationURL.indexOf('.m4v') !== -1)) && (a_elementDestinationURL != "")) {
                        a_tealiumCategory = "download";
                    }
                    a_tealiumCategoryAtt.value = a_tealiumCategory;
                    a_tealiumType = "action";
                    a_tealiumTypeAtt = document.createAttribute("data-tealium-type");
                    if ((element.closest("nav").length !== 0) || (element.closest(".nav-link").length !== 0) || (element.closest(".tabbed-nav-links").length !== 0) || (element.closest("cxm-slide-out").length !== 0) || (element.find(".header-link-circle").length !== 0)) {
                        a_tealiumType = "navigation";
                    }
                    if ((a_elementDestinationURL !== "undefined") && (a_elementDestinationURL !== "unknown a_elementDestinationURL") && (a_elementDestinationURL !== "#") && (a_elementDestinationURL !== "") && (a_elementDestinationURL !== undefined) && (a_elementDestinationURL !== null)) {
                        if ((a_elementDestinationURL.indexOf(window.location.hostname) == -1) && (a_elementDestinationURL.indexOf("/") !== 0) && (a_elementDestinationURL.indexOf("#") !== 0) && (a_elementDestinationURL.indexOf("%2F") !== 0) && (a_elementDestinationURL.indexOf("%23") !== 0) && (a_elementDestinationURL.indexOf("mailto:") == -1) && (a_elementDestinationURL.indexOf("tel:") == -1) && (a_elementDestinationURL.indexOf("sms:") == -1) && (a_elementDestinationURL.indexOf("mailto%3A") == -1) && (a_elementDestinationURL.indexOf("tel%3A") == -1) && (a_elementDestinationURL.indexOf("sms%3A") == -1) && (a_elementDestinationURL.indexOf("window.open('/") !== 0) && (a_elementDestinationURL.indexOf("window.open('#") !== 0) && (a_elementDestinationURL.indexOf("window.open('%2F") !== 0) && (a_elementDestinationURL.indexOf("window.open('%23") !== 0)) {
                            a_tealiumType = "exit";
                        }
                    }
                    if ((typeof (a_elementDestinationURL) != 'undefined') && ((a_elementDestinationURL.indexOf('.pdf') !== -1) || (a_elementDestinationURL.indexOf('.doc') !== -1) || (a_elementDestinationURL.indexOf('.docx') !== -1) || (a_elementDestinationURL.indexOf('.jpg') !== -1) || (a_elementDestinationURL.indexOf('.png') !== -1) || (a_elementDestinationURL.indexOf('.svg') !== -1) || (a_elementDestinationURL.indexOf('.xls') !== -1) || (a_elementDestinationURL.indexOf('.xlsx') !== -1) || (a_elementDestinationURL.indexOf('.ppt') !== -1) || (a_elementDestinationURL.indexOf('.pptx') !== -1) || (a_elementDestinationURL.indexOf('.tab') !== -1) || (a_elementDestinationURL.indexOf('.csv') !== -1) || (a_elementDestinationURL.indexOf('.zip') !== -1) || (a_elementDestinationURL.indexOf('.txt') !== -1) || (a_elementDestinationURL.indexOf('.vsd') !== -1) || (a_elementDestinationURL.indexOf('.vxd') !== -1) || (a_elementDestinationURL.indexOf('.xml') !== -1) || (a_elementDestinationURL.indexOf('.js') !== -1) || (a_elementDestinationURL.indexOf('.css') !== -1) || (a_elementDestinationURL.indexOf('.rar') !== -1) || (a_elementDestinationURL.indexOf('.exe') !== -1) || (a_elementDestinationURL.indexOf('.wma') !== -1) || (a_elementDestinationURL.indexOf('.mov') !== -1) || (a_elementDestinationURL.indexOf('.avi') !== -1) || (a_elementDestinationURL.indexOf('.wmv') !== -1) || (a_elementDestinationURL.indexOf('.mp3') !== -1) || (a_elementDestinationURL.indexOf('.wav') !== -1) || (a_elementDestinationURL.indexOf('.m4v') !== -1)) && (a_elementDestinationURL != "")) {
                        a_tealiumType = "download";
                    }
                    a_tealiumTypeAtt.value = a_tealiumType;
                    a_tealiumAction = "click";
                    a_tealiumActionAtt = document.createAttribute("data-tealium-action");
                    if ((element.closest("nav").length !== 0) || (element.closest("cxm-slide-out").length !== 0) || (element.closest(".nav-area").length !== 0)) {
                        a_tealiumAction += " menu-link";
                    }
                    if (element.closest(".crumbs").length !== 0) {
                        a_tealiumAction += " breadcrumb-link";
                    }
                    if ((element.closest(".alphabet-list").length !== 0) || (element.closest(".cs_search-filter").length !== 0)) {
                        a_tealiumAction += " filter-link";
                    }
                    if (element.closest(".collapsible-toggle").length !== 0) {
                        a_tealiumAction += " accordion-link";
                    }
                    if (element.closest(".cs_result-link").length !== 0) {
                        a_tealiumAction += " search_result-link";
                    }
                    if (element.closest(".add-link").length !== 0) {
                        a_tealiumAction += " add-link";
                    }
                    if (element.closest(".edit-link").length !== 0) {
                        a_tealiumAction += " edit-link";
                    }
                    if ((element.closest(".remove-link").length !== 0) || (element.closest(".remove-note").length !== 0)) {
                        a_tealiumAction += " remove-link";
                    }
                    if (element.closest(".map-image").length !== 0) {
                        a_tealiumAction += " map-link";
                    }
                    if (element.closest(".previous-link").length !== 0) {
                        a_tealiumAction += " previous";
                    }
                    if (element.closest(".next-link").length !== 0) {
                        a_tealiumAction += " next";
                    }
                    if (element.closest("footer").length !== 0) {
                        a_tealiumAction = "click footer-link";
                    }
                    if ((a_elementDestinationURL !== "undefined") && (a_elementDestinationURL !== "unknown a_elementDestinationURL") && (a_elementDestinationURL !== "#") && (a_elementDestinationURL !== "") && (a_elementDestinationURL !== undefined) && (a_elementDestinationURL !== null)) {
                        if ((a_elementDestinationURL.indexOf(window.location.hostname) == -1) && (a_elementDestinationURL.indexOf("/") !== 0) && (a_elementDestinationURL.indexOf("#") !== 0) && (a_elementDestinationURL.indexOf("%2F") !== 0) && (a_elementDestinationURL.indexOf("%23") !== 0) && (a_elementDestinationURL.indexOf("window.open('/") !== 0) && (a_elementDestinationURL.indexOf("window.open('#") !== 0) && (a_elementDestinationURL.indexOf("window.open('%2F") !== 0) && (a_elementDestinationURL.indexOf("window.open('%23") !== 0)) {
                            a_tealiumAction = "click exit-link";
                        }
                        if ((a_elementDestinationURL.indexOf("mailto:") !== -1) || (a_elementDestinationURL.indexOf("mailto%3A") !== -1)) {
                            a_tealiumAction = "click mailto-link";
                        }
                        if ((a_elementDestinationURL.indexOf("tel:") !== -1) || (a_elementDestinationURL.indexOf("tel%3A") !== -1)) {
                            a_tealiumAction = "click tel-link";
                        }
                        if ((a_elementDestinationURL.indexOf("sms:") !== -1) || (a_elementDestinationURL.indexOf("sms%3A") !== -1)) {
                            a_tealiumAction = "click sms-link";
                        }
                    }
                    if (element.closest("div.social").length !== 0) {
                        a_tealiumAction = "click social-link";
                    }
                    if ((element.closest(".tabbed-nav-links").length !== 0) || (element.closest("#methodOfContact").length !== 0)) {
                        a_tealiumAction = "click tabs-link";
                    }
                    if ((typeof (a_elementDestinationURL) != 'undefined') && ((a_elementDestinationURL.indexOf('.pdf') !== -1) || (a_elementDestinationURL.indexOf('.doc') !== -1) || (a_elementDestinationURL.indexOf('.docx') !== -1) || (a_elementDestinationURL.indexOf('.jpg') !== -1) || (a_elementDestinationURL.indexOf('.png') !== -1) || (a_elementDestinationURL.indexOf('.svg') !== -1) || (a_elementDestinationURL.indexOf('.xls') !== -1) || (a_elementDestinationURL.indexOf('.xlsx') !== -1) || (a_elementDestinationURL.indexOf('.ppt') !== -1) || (a_elementDestinationURL.indexOf('.pptx') !== -1) || (a_elementDestinationURL.indexOf('.tab') !== -1) || (a_elementDestinationURL.indexOf('.csv') !== -1) || (a_elementDestinationURL.indexOf('.zip') !== -1) || (a_elementDestinationURL.indexOf('.txt') !== -1) || (a_elementDestinationURL.indexOf('.vsd') !== -1) || (a_elementDestinationURL.indexOf('.vxd') !== -1) || (a_elementDestinationURL.indexOf('.xml') !== -1) || (a_elementDestinationURL.indexOf('.js') !== -1) || (a_elementDestinationURL.indexOf('.css') !== -1) || (a_elementDestinationURL.indexOf('.rar') !== -1) || (a_elementDestinationURL.indexOf('.exe') !== -1) || (a_elementDestinationURL.indexOf('.wma') !== -1) || (a_elementDestinationURL.indexOf('.mov') !== -1) || (a_elementDestinationURL.indexOf('.avi') !== -1) || (a_elementDestinationURL.indexOf('.wmv') !== -1) || (a_elementDestinationURL.indexOf('.mp3') !== -1) || (a_elementDestinationURL.indexOf('.wav') !== -1) || (a_elementDestinationURL.indexOf('.m4v') !== -1)) && (a_elementDestinationURL != "")) {
                        a_tealiumAction = "click download";
                    }
                    if (element.find(".header-link-circle").length !== 0) {
                        a_tealiumAction = "click flyout-button";
                    }
                    if (element.closest(".close-btn").length !== 0) {
                        a_tealiumAction = "click close-button";
                    }
                    if ((element.closest(".submit-button").length !== 0) || (element.closest(".button-submit").length !== 0)) {
                        a_tealiumAction = "click save-button";
                    }
                    if (element.closest(".cancel-button").length !== 0) {
                        a_tealiumAction = "click cancel-button";
                    }
                    if ((element.closest("basf-account-selector").length !== 0) && (element.closest(".primary-btn").length !== 0)) {
                        a_tealiumAction = "click continue-button";
                    }
                    if ((element.closest("cxm-login").length !== 0) && (element.closest(".primary-btn").length !== 0)) {
                        a_tealiumAction = "click signIn-button";
                    }
                    if (((element.closest("basf-activity-search-filter").length !== 0) && (element.closest("#submit-button").length !== 0)) || (element.closest(".searchform-submit").length !== 0) || (element.closest(".cs_search-submit").length !== 0)) {
                        a_tealiumAction = "click search-button";
                    }
                    if ((element.closest("input").length !== 0) || (element.closest("textarea").length !== 0) || (element.closest("select").length !== 0)) {
                        a_tealiumAction = "change";
                        if (elementType === "INPUT_text") {
                            a_tealiumAction += " text-input";
                        }
                        if (elementType === "TEXTAREA") {
                            a_tealiumAction += " textarea-input";
                        }
                        if (elementType === "SELECT") {
                            a_tealiumAction += " select-input";
                        }
                        if (elementType === "INPUT_checkbox") {
                            a_tealiumAction += " checkbox-input";
                        }
                        if (elementType === "INPUT_radio") {
                            a_tealiumAction += " radio-input";
                        }
                        if (elementType === "INPUT_tel") {
                            a_tealiumAction += " tel-input";
                        }
                        if (elementType === "INPUT_email") {
                            a_tealiumAction += " email-input";
                        }
                        if (elementType === "INPUT_password") {
                            a_tealiumAction += " password-input";
                        }
                        if (elementType === "INPUT_postalCode") {
                            a_tealiumAction += " postalCode-input";
                        }
                        if (elementType === "INPUT_url") {
                            a_tealiumAction += " url-input";
                        }
                    }
                    a_tealiumActionAtt.value = a_tealiumAction;
                    if (item.getAttribute("data-tealium-value") === null) {
                        item.setAttributeNode(a_tealiumValueAtt);
                    } else {
                        item.setAttribute("data-tealium-value", a_tealiumValue);
                    }
                    if (item.getAttribute("data-tealium-category") === null) {
                        item.setAttributeNode(a_tealiumCategoryAtt);
                    } else {
                        item.setAttribute("data-tealium-category", a_tealiumCategory);
                    }
                    if (item.getAttribute("data-tealium-action") === null) {
                        item.setAttributeNode(a_tealiumActionAtt);
                    } else {
                        item.setAttribute("data-tealium-action", a_tealiumAction);
                    }
                    if (item.getAttribute("data-tealium-type") === null) {
                        item.setAttributeNode(a_tealiumTypeAtt);
                    } else {
                        item.setAttribute("data-tealium-type", a_tealiumType);
                    }
                }
            }
            function a_tealiumDataAuthor() {
                if (document.querySelectorAll("a").length !== 0) {
                    a_linksArrayRaw = document.querySelectorAll("a");
                    a_linksArray = Array.from(a_linksArrayRaw);
                    console.log("a_linksArray Length: " + a_linksArray.length);
                    a_linksArray.forEach(a_createAnalyticsDataAttribrutes);
                }
                if (document.querySelectorAll("button").length !== 0) {
                    a_buttonsArrayRaw = document.querySelectorAll("button");
                    a_buttonsArray = Array.from(a_buttonsArrayRaw);
                    console.log("a_buttonsArray Length: " + a_buttonsArray.length);
                    a_buttonsArray.forEach(a_createAnalyticsDataAttribrutes);
                }
                if (document.querySelectorAll("input:not(cxm-field-forecast-brand-summary input)").length !== 0) {
                    a_inputsArrayRaw = document.querySelectorAll("input");
                    a_inputsArray = Array.from(a_inputsArrayRaw);
                    console.log("a_inputsArray Length: " + a_inputsArray.length);
                    a_inputsArray.forEach(a_createAnalyticsDataAttribrutes);
                }
                if (document.querySelectorAll("textarea:not(cxm-field-forecast-brand-summary textarea)").length !== 0) {
                    a_textareasArrayRaw = document.querySelectorAll("textarea");
                    a_textareasArray = Array.from(a_textareasArrayRaw);
                    console.log("a_textareasArray Length: " + a_textareasArray.length);
                    a_textareasArray.forEach(a_createAnalyticsDataAttribrutes);
                }
                if (document.querySelectorAll("select:not(cxm-field-forecast-brand-summary select)").length !== 0) {
                    a_selectsArrayRaw = document.querySelectorAll("select");
                    a_selectsArray = Array.from(a_selectsArrayRaw);
                    console.log("a_selectsArray Length at Preload: " + a_selectsArray.length);
                    a_selectsArray.forEach(a_createAnalyticsDataAttribrutes);
                }
                if (document.querySelectorAll("dd:not(cxm-field-forecast-brand-summary dd)").length !== 0) {
                    a_ddArrayRaw = document.querySelectorAll("dd");
                    a_ddArray = Array.from(a_ddArrayRaw);
                    console.log("a_ddArray Length: " + a_ddArray.length);
                    a_ddArray.forEach(a_createAnalyticsDataAttribrutes);
                }
            }
            a_tealiumDataAuthor();
            console.log("Set data-tealium attributes at preloader");
            window.addEventListener("basf_service_call_completed", function() {
                a_tealiumDataAuthor();
                console.log("Set data-tealium attributes at basf_service_call_completed");
            });
        } catch (e) {
            console.log(e)
        }
    } catch (e) {
        console.log(e);
    }
}
if (!utag_condload) {
    try {
        try {
            window.utag_cfg_ovrd = window.utag_cfg_ovrd || {};
            window.utag_cfg_ovrd.lowerqp = true;
        } catch (e) {
            console.log(e)
        }
    } catch (e) {
        console.log(e);
    }
}
if (!utag_condload) {
    try {
        try {
            (function() {
                var eventCallback = function(event) {
                    var element = event.currentTarget;
                    if (window.utag && window.utag.link) {
                        window.setTimeout(function() {
                            window.utag.view(utag.data);
                        }, 1000);
                    }
                };
                var bindConsentAccepts = function(element) {
                    if (element) {
                        var isProcessed = element.className.indexOf("teal-binded") > -1;
                        if (!isProcessed) {
                            element.classList.add("teal-binded");
                            if (element !== null && element !== undefined) {
                                if (document.addEventListener) {
                                    element.addEventListener("click", eventCallback, false);
                                } else if (document.attachEvent) {
                                    element.attachEvent("click", eventCallback);
                                } else {
                                    element.onclick = eventCallback;
                                }
                            }
                        }
                    }
                };
                var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
                var mutationObserver = new MutationObserver(function(mutations) {
                    mutations.forEach(function(mutation) {
                        var target = mutation.target || {};
                        if (target && target.id) {
                            if (target.id.indexOf("onetrust-pc-sdk") > -1) {
                                var savePreferenceButton = document.querySelector(".save-preference-btn-handler");
                                bindConsentAccepts(savePreferenceButton);
                            }
                            if (target.id.indexOf("onetrust-banner-sdk") > -1) {
                                var acceptButton = document.querySelector("#onetrust-accept-btn-handler");
                                bindConsentAccepts(acceptButton);
                            }
                            if (target.id.indexOf("onetrust-pc-sdk") > -1) {
                                var refuseAllButton = document.querySelector(".ot-pc-refuse-all-handler");
                                bindConsentAccepts(refuseAllButton);
                            }
                            if (target.id.indexOf("accept-recommended-btn-handler") > -1) {
                                bindConsentAccepts(target);
                            }
                        }
                    });
                }
                );
                mutationObserver.observe(document.documentElement, {
                    attributes: true,
                    characterData: true,
                    childList: true,
                    subtree: true,
                    attributeOldValue: true,
                    characterDataOldValue: true
                });
                bindConsentAccepts(document.querySelector("#onetrust-accept-btn-handler"));
                bindConsentAccepts(document.querySelector(".save-preference-btn-handler"));
                bindConsentAccepts(document.querySelector(".ot-pc-refuse-all-handler"));
                bindConsentAccepts(document.getElementById("accept-recommended-btn-handler"));
            }
            )();
        } catch (e) {
            console.log(e)
        }
    } catch (e) {
        console.log(e);
    }
}
if (!utag_condload) {
    try {
        try {
            var urlParts = window.location.pathname.split('/');
            var inScope = window.location.hostname + "/" + urlParts[1];
            var cctId = "";
            switch (inScope) {
            case 'www.basf.com/global':
                cctId = 'f87d695c-ddfb-4a5c-aabc-a809b42e7b98';
                break;
            }
            switch (window.location.hostname) {
            case 'experience.customerportal.basf.com':
                cctId = 'c051c802-64a8-42d7-84aa-5c2e135f5cbc';
                break;
            case 'experience-dev.customerportal.basf.com':
                cctId = '9311982b-d289-4bea-88a6-695aca0b6767';
                break;
            case 'experience-itl.customerportal.basf.com':
                cctId = 'f94b2455-8fee-4df9-8d02-2fc9bfdf239c';
                break;
            case 'experience-stage.customerportal.basf.com':
                cctId = '34175b2f-483e-4453-9217-400d398ecf1f';
                break;
            case 'experience.basf.com':
                cctId = '713e2846-8bb9-4afb-aec8-22c7bb42042d';
                break;
            case 'experience-dev01.basf.mrm-client.com':
                cctId = '69865be5-7e70-4ca9-bfd6-573b9507055c';
                break;
            case 'experience-itl02.basf.mrm-client.com':
                cctId = '4d445a1b-96a7-4598-8760-e16664032bad';
                break;
            case 'experience-itl02.basf.com':
                cctId = 'c3457cdb-4825-44c7-a31f-57fcac319ca8';
                break;
            case 'experience-stage02.basf.com':
                cctId = 'c0ba1d06-ffb7-4633-a6d6-fd68b47c9c09';
                break;
            case 'experience-dev.partnerportal.basf.com':
                cctId = '939ea65b-6d43-42a9-944d-4d897046c138';
                break;
            case 'experience-itl.partnerportal.basf.com':
                cctId = '3efce596-ea0b-45d8-b838-bfd38599749f';
                break;
            case 'experience-stage.partnerportal.basf.com':
                cctId = '3c68f869-fafc-4462-a7c6-39ebffba081c';
                break;
            case 'digitalconnect.basf.com':
                cctId = 'e97f98da-d4e8-441a-8b92-99600abf511b';
                break;
            }
            if (cctId != "") {
                var sc = document.createElement('script');
                sc.type = 'text/javascript';
                sc.charset = 'UTF-8';
                sc.setAttribute('data-document-language', "true");
                sc.setAttribute('data-domain-script', cctId);
                sc.src = 'https://cdn.cookielaw.org/scripttemplates/otSDKStub.js';
                document.getElementsByTagName('head')[0].appendChild(sc);
                function OptanonWrapper() {
                    OneTrust.initializeCookiePolicyHtml();
                    switch (window.location.hostname) {
                    case 'xxxx':
                        document.getElementById("ot-sdk-btn-floating").style.pointerEvents = "none";
                        document.getElementById("ot-sdk-btn-floating").style.display = "none";
                    }
                }
                window.isOnetrustLoaded = true;
            }
        } catch (e) {
            console.log(e)
        }
    } catch (e) {
        console.log(e);
    }
}
if (!utag_condload) {
    try {
        try {
            console.log('Execute Tealium Extension: OneTrust - Initiate & Re-Evaluate Cookie Compliance Variables');
            if (typeof Object.entries !== 'function' || typeof String.prototype.padStart !== 'function') {
                console.log('ES8 features not supported by this browser. Script will not be executed.');
            } else if (document.cookie.indexOf('OptanonConsent=') === -1) {
                console.log('Waiting for cookie compliance solution: Cookie "OptanonConsent" not set');
                async function init() {
                    async function delay(ms) {
                        return new Promise(resolve=>setTimeout(resolve, ms));
                    }
                    try {
                        await delay(1000);
                        if (typeof utag === 'object') {
                            console.log('Tealium initiated: utag is defined.');
                            if (typeof window.OnetrustActiveGroups === 'string' && window.OnetrustActiveGroups.replace(/\W+/g, '').trim() !== '') {
                                console.log('Cookie Compliance initiated: OnetrustActiveGroups is set. Populating js_page with OnetrustActiveGroups ...');
                                utag.data.js_page = {
                                    OnetrustActiveGroups: window.OnetrustActiveGroups
                                };
                                console.log('js_page populated:', utag.data.js_page);
                                utag.view({});
                                console.log('Reevaluation of Tealium loading rules triggered.');
                            } else {
                                console.log('window.OnetrustActiveGroups not yet set. Waiting for 1000ms...');
                                await delay(1000);
                                if (typeof window.OnetrustActiveGroups === 'string' && window.OnetrustActiveGroups.replace(/\W+/g, '').trim() !== '') {
                                    console.log('window.OnetrustActiveGroups now set. Populating js_page with OnetrustActiveGroups...');
                                    utag.data.js_page = {
                                        OnetrustActiveGroups: window.OnetrustActiveGroups
                                    };
                                    console.log('js_page populated:', utag.data.js_page);
                                    utag.view({});
                                    console.log('Reevaluation of Tealium loading rules triggered.');
                                } else {
                                    console.log('Error: Timeout waiting for window.OnetrustActiveGroups. Unable to populate js_page.');
                                }
                            }
                        } else {
                            console.log('Error: Timeout waiting for utag. Unable to populate js_page.');
                        }
                    } catch (error) {
                        console.log(`An error occurred:${error.message}`);
                    } finally {
                        console.log('Script execution finished.');
                    }
                }
                init();
            }
        } catch (e) {
            console.log(e)
        }
    } catch (e) {
        console.log(e);
    }
}
if (typeof utag == "undefined" && !utag_condload) {
    var utag = {
        id: "basf.cxm-tools",
        o: {},
        sender: {},
        send: {},
        rpt: {
            ts: {
                a: new Date()
            }
        },
        dbi: [],
        db_log: [],
        loader: {
            q: [],
            lc: 0,
            f: {},
            p: 0,
            ol: 0,
            wq: [],
            lq: [],
            bq: {},
            bk: {},
            rf: 0,
            ri: 0,
            rp: 0,
            rq: [],
            ready_q: [],
            sendq: {
                "pending": 0
            },
            run_ready_q: function() {
                for (var i = 0; i < utag.loader.ready_q.length; i++) {
                    utag.DB("READY_Q:" + i);
                    try {
                        utag.loader.ready_q[i]()
                    } catch (e) {
                        utag.DB(e)
                    }
                    ;
                }
            },
            lh: function(a, b, c) {
                a = "" + location.hostname;
                b = a.split(".");
                c = (/\.co\.|\.com\.|\.org\.|\.edu\.|\.net\.|\.asn\.|\...\.jp$/.test(a)) ? 3 : 2;
                return b.splice(b.length - c, c).join(".");
            },
            WQ: function(a, b, c, d, g) {
                utag.DB('WQ:' + utag.loader.wq.length);
                try {
                    if (utag.udoname && utag.udoname.indexOf(".") < 0) {
                        utag.ut.merge(utag.data, window[utag.udoname], 0);
                    }
                    if (utag.cfg.load_rules_at_wait) {
                        utag.handler.LR(utag.data);
                    }
                } catch (e) {
                    utag.DB(e)
                }
                ;d = 0;
                g = [];
                for (a = 0; a < utag.loader.wq.length; a++) {
                    b = utag.loader.wq[a];
                    b.load = utag.loader.cfg[b.id].load;
                    if (b.load == 4) {
                        this.f[b.id] = 0;
                        utag.loader.LOAD(b.id)
                    } else if (b.load > 0) {
                        g.push(b);
                        d++;
                    } else {
                        this.f[b.id] = 1;
                    }
                }
                for (a = 0; a < g.length; a++) {
                    utag.loader.AS(g[a]);
                }
                if (d == 0) {
                    utag.loader.END();
                }
            },
            AS: function(a, b, c, d) {
                utag.send[a.id] = a;
                if (typeof a.src == 'undefined' || !utag.ut.hasOwn(a, 'src')) {
                    a.src = utag.cfg.path + ((typeof a.name != 'undefined') ? a.name : 'ut' + 'ag.' + a.id + '.js')
                }
                a.src += (a.src.indexOf('?') > 0 ? '&' : '?') + 'utv=' + (a.v ? utag.cfg.template + a.v : utag.cfg.v);
                utag.rpt['l_' + a.id] = a.src;
                b = document;
                this.f[a.id] = 0;
                if (a.load == 2) {
                    utag.DB("Attach sync: " + a.src);
                    a.uid = a.id;
                    b.write('<script id="utag_' + a.id + '" src="' + a.src + '"></scr' + 'ipt>')
                    if (typeof a.cb != 'undefined')
                        a.cb();
                } else if (a.load == 1 || a.load == 3) {
                    if (b.createElement) {
                        c = 'utag_basf.cxm-tools_' + a.id;
                        if (!b.getElementById(c)) {
                            d = {
                                src: a.src,
                                id: c,
                                uid: a.id,
                                loc: a.loc
                            }
                            if (a.load == 3) {
                                d.type = "iframe"
                            }
                            ;if (typeof a.cb != 'undefined')
                                d.cb = a.cb;
                            utag.ut.loader(d);
                        }
                    }
                }
            },
            GV: function(a, b, c) {
                b = {};
                for (c in a) {
                    if (a.hasOwnProperty(c) && typeof a[c] != "function")
                        b[c] = a[c];
                }
                return b
            },
            OU: function(tid, tcat, a, b, c, d, f, g) {
                g = {};
                utag.loader.RDcp(g);
                try {
                    if (typeof g['cp.OPTOUTMULTI'] != 'undefined') {
                        c = utag.loader.cfg;
                        a = utag.ut.decode(g['cp.OPTOUTMULTI']).split('|');
                        for (d = 0; d < a.length; d++) {
                            b = a[d].split(':');
                            if (b[1] * 1 !== 0) {
                                if (b[0].indexOf('c') == 0) {
                                    for (f in utag.loader.GV(c)) {
                                        if (c[f].tcat == b[0].substring(1))
                                            c[f].load = 0;
                                        if (c[f].tid == tid && c[f].tcat == b[0].substring(1))
                                            return true;
                                    }
                                    if (tcat == b[0].substring(1))
                                        return true;
                                } else if (b[0] * 1 == 0) {
                                    utag.cfg.nocookie = true
                                } else {
                                    for (f in utag.loader.GV(c)) {
                                        if (c[f].tid == b[0])
                                            c[f].load = 0
                                    }
                                    if (tid == b[0])
                                        return true;
                                }
                            }
                        }
                    }
                } catch (e) {
                    utag.DB(e)
                }
                return false;
            },
            RDdom: function(o) {
                var d = document || {}
                  , l = location || {};
                o["dom.referrer"] = d.referrer;
                o["dom.title"] = "" + d.title;
                o["dom.domain"] = "" + l.hostname;
                o["dom.query_string"] = ("" + l.search).substring(1);
                o["dom.hash"] = ("" + l.hash).substring(1);
                o["dom.url"] = "" + d.URL;
                o["dom.pathname"] = "" + l.pathname;
                o["dom.viewport_height"] = window.innerHeight || (d.documentElement ? d.documentElement.clientHeight : 960);
                o["dom.viewport_width"] = window.innerWidth || (d.documentElement ? d.documentElement.clientWidth : 960);
            },
            RDcp: function(o, b, c, d) {
                b = utag.loader.RC();
                for (d in b) {
                    if (d.match(/utag_(.*)/)) {
                        for (c in utag.loader.GV(b[d])) {
                            o["cp.utag_" + RegExp.$1 + "_" + c] = b[d][c];
                        }
                    }
                }
                for (c in utag.loader.GV((utag.cl && !utag.cl['_all_']) ? utag.cl : b)) {
                    if (c.indexOf("utag_") < 0 && typeof b[c] != "undefined")
                        o["cp." + c] = b[c];
                }
            },
            hasSplitUtagMainCookie: function() {
                return document.cookie.match(/([\s\S]*)utag_main_([\s\S]*)=([\s\S]*)/g);
            },
            hasUtagMainCookie: function() {
                return document.cookie.includes("utag_main=");
            },
            convertingToSplitCookies: function() {
                return utag.cfg.split_cookie && utag.loader.hasUtagMainCookie();
            },
            revertingSplitCookies: function() {
                return !utag.cfg.split_cookie && utag.loader.hasSplitUtagMainCookie();
            },
            readIndividualCookies: function() {
                if (!document.cookie || document.cookie === "") {
                    return {};
                }
                var cookies = document.cookie.split("; ");
                return cookies.reduce(function(result, cookie) {
                    var kv = cookie.split("=");
                    if (kv[0].startsWith("utag_")) {
                        var cookieName = kv[0].split("_")[1];
                        var cookieNameWithTag = "utag_" + cookieName;
                        if (!result[cookieNameWithTag]) {
                            result[cookieNameWithTag] = {};
                        }
                        var nameTrimmed = kv[0].replace(cookieNameWithTag + "_", "");
                        result[cookieNameWithTag][nameTrimmed] = String(kv[1]).replace(/%3B/g, ';')
                    }
                    return result;
                }, {});
            },
            RDqp: function(o, a, b, c) {
                a = location.search + (location.hash + '').replace("#", "&");
                if (utag.cfg.lowerqp) {
                    a = a.toLowerCase()
                }
                ;if (a.length > 1) {
                    b = a.substring(1).split('&');
                    for (a = 0; a < b.length; a++) {
                        c = b[a].split("=");
                        if (c.length > 1) {
                            o["qp." + c[0]] = utag.ut.decode(c[1])
                        }
                    }
                }
            },
            RDmeta: function(o, a, b, h) {
                a = document.getElementsByTagName("meta");
                for (b = 0; b < a.length; b++) {
                    try {
                        h = a[b].name || a[b].getAttribute("property") || "";
                    } catch (e) {
                        h = "";
                        utag.DB(e)
                    }
                    ;if (utag.cfg.lowermeta) {
                        h = h.toLowerCase()
                    }
                    ;if (h != "") {
                        o["meta." + h] = a[b].content
                    }
                }
            },
            RDva: function(o) {
                var readAttr = function(o, l) {
                    var a = "", b;
                    a = localStorage.getItem(l);
                    if (!a || a == "{}")
                        return;
                    b = utag.ut.flatten({
                        va: JSON.parse(a)
                    });
                    utag.ut.merge(o, b, 1);
                }
                try {
                    readAttr(o, "tealium_va");
                    readAttr(o, "tealium_va_" + o["ut.account"] + "_" + o["ut.profile"]);
                } catch (e) {
                    utag.DB(e)
                }
            },
            RDut: function(o, a) {
                var t = {};
                var d = new Date();
                var m = (utag.ut.typeOf(d.toISOString) == "function");
                o["ut.domain"] = utag.cfg.domain;
                o["ut.version"] = utag.cfg.v;
                t["tealium_event"] = o["ut.event"] = a || "view";
                t["tealium_visitor_id"] = o["ut.visitor_id"] = o["cp.utag_main_v_id"];
                t["tealium_session_id"] = o["ut.session_id"] = o["cp.utag_main_ses_id"];
                t["tealium_session_number"] = o["cp.utag_main__sn"];
                t["tealium_session_event_number"] = o["cp.utag_main__se"];
                try {
                    t["tealium_datasource"] = utag.cfg.datasource;
                    t["tealium_account"] = o["ut.account"] = utag.cfg.utid.split("/")[0];
                    t["tealium_profile"] = o["ut.profile"] = utag.cfg.utid.split("/")[1];
                    t["tealium_environment"] = o["ut.env"] = "qa";
                } catch (e) {
                    utag.DB(e)
                }
                t["tealium_random"] = Math.random().toFixed(16).substring(2);
                t["tealium_library_name"] = "ut" + "ag.js";
                t["tealium_library_version"] = (utag.cfg.template + "0").substring(2);
                t["tealium_timestamp_epoch"] = Math.floor(d.getTime() / 1000);
                t["tealium_timestamp_utc"] = (m ? d.toISOString() : "");
                d.setHours(d.getHours() - (d.getTimezoneOffset() / 60));
                t["tealium_timestamp_local"] = (m ? d.toISOString().replace("Z", "") : "");
                utag.ut.merge(o, t, 0);
            },
            RDses: function(o, a, c) {
                a = (new Date()).getTime();
                c = (a + parseInt(utag.cfg.session_timeout)) + "";
                if (!o["cp.utag_main_ses_id"]) {
                    o["cp.utag_main_ses_id"] = a + "";
                    o["cp.utag_main__ss"] = "1";
                    o["cp.utag_main__se"] = "1";
                    o["cp.utag_main__sn"] = (1 + parseInt(o["cp.utag_main__sn"] || 0)) + "";
                } else {
                    o["cp.utag_main__ss"] = "0";
                    o["cp.utag_main__se"] = (1 + parseInt(o["cp.utag_main__se"] || 0)) + "";
                }
                o["cp.utag_main__pn"] = o["cp.utag_main__pn"] || "1";
                o["cp.utag_main__st"] = c;
                var ses_id = utag.loader.addExpSessionFlag(o["cp.utag_main_ses_id"] || a);
                var pn = utag.loader.addExpSessionFlag(o["cp.utag_main__pn"]);
                var ss = utag.loader.addExpSessionFlag(o["cp.utag_main__ss"]);
                var st = utag.loader.addExpSessionFlag(c);
                var se = utag.loader.addExpSessionFlag(o["cp.utag_main__se"]);
                utag.loader.SC("utag_main", {
                    _sn: (o["cp.utag_main__sn"] || 1),
                    _se: se,
                    _ss: ss,
                    _st: st,
                    ses_id: ses_id,
                    _pn: pn
                });
            },
            containsExpSessionFlag: function(v) {
                return String(v).replace(/%3B/g, ';').includes(";exp-session");
            },
            addExpSessionFlag: function(v) {
                return utag.loader.containsExpSessionFlag(v) ? v : v + ";exp-session";
            },
            containsExpFlag: function(v) {
                return String(v).replace(/%3B/g, ';').includes(";exp-");
            },
            addExpFlag: function(v, x) {
                return utag.loader.containsExpFlag(v) ? v : v + ";exp-" + String(x);
            },
            RDpv: function(o) {
                if (typeof utag.pagevars == "function") {
                    utag.DB("Read page variables");
                    utag.pagevars(o);
                }
            },
            RDlocalStorage: function(o) {
                if (utag.cfg.ignoreLocalStorage) {
                    return;
                }
                Object.keys(window.localStorage).forEach(function(localStorageKey) {
                    o["ls." + localStorageKey] = window.localStorage[localStorageKey];
                });
            },
            RDsessionStorage: function(o) {
                if (utag.cfg.ignoreSessionStorage) {
                    return;
                }
                Object.keys(window.sessionStorage).forEach(function(sessionStorageKey) {
                    o["ss." + sessionStorageKey] = window.sessionStorage[sessionStorageKey];
                });
            },
            convertCustomMultiCookies: function() {
                var cookiesToConvert = {}
                if (utag.loader.convertingToSplitCookies()) {
                    utag.loader.mapUtagCookies(function(parentCookie) {
                        cookiesToConvert[parentCookie.key] = cookiesToConvert[parentCookie.key] || {}
                        parentCookie.value.split('$').forEach(function(subCookie) {
                            var key = subCookie.split(':')[0]
                            var value = subCookie.split(':')[1]
                            cookiesToConvert[parentCookie.key][key] = (String(value).indexOf('%3Bexp-') !== -1 && String(value).indexOf('%3Bexp-session') === -1) ? String(value).replace(/%3B/g, ';') + 'u' : String(value).replace(/%3B/g, ';');
                        })
                    })
                } else if (utag.loader.revertingSplitCookies()) {
                    utag.loader.mapUtagCookies(function(splitCookie) {
                        var parentCookieName = splitCookie.key.match(/^utag_[^_]*/)[0];
                        var subCookieName = splitCookie.key.split(parentCookieName + '_')[1];
                        cookiesToConvert[parentCookieName] = cookiesToConvert[parentCookieName] || {};
                        cookiesToConvert[parentCookieName][subCookieName] = (String(splitCookie.value).indexOf('%3Bexp-') !== -1 && String(splitCookie.value).indexOf('%3Bexp-session')) === -1 ? String(splitCookie.value).replace(/%3B/g, ';') + 'u' : String(splitCookie.value).replace(/%3B/g, ';');
                    })
                }
                if (utag.loader.convertingToSplitCookies()) {
                    utag.loader.getUtagCookies().forEach(function(cookie) {
                        utag.loader.deleteCookie(cookie.key);
                    });
                } else if (utag.loader.revertingSplitCookies()) {
                    utag.loader.deleteIndividualCookies();
                }
                Object.keys(cookiesToConvert).forEach(function(key) {
                    utag.loader.SC(key, cookiesToConvert[key]);
                });
            },
            RD: function(o, a) {
                utag.DB("utag.loader.RD");
                utag.DB(o);
                utag.loader.RDcp(o);
                if (utag.cfg.split_cookie) {
                    utag.loader.checkCookiesAgainstWhitelist();
                }
                if (utag.loader.convertingToSplitCookies() || utag.loader.revertingSplitCookies()) {
                    utag.loader.convertCustomMultiCookies();
                }
                if (!utag.loader.rd_flag) {
                    utag.loader.rd_flag = 1;
                    o["cp.utag_main__pn"] = (1 + parseInt(o["cp.utag_main__pn"] || 0)) + "";
                    var setVId = window.utag_cfg_ovrd && window.utag_cfg_ovrd.always_set_v_id || false;
                    if (setVId) {
                        o["cp.utag_main_v_id"] = o["cp.utag_main_v_id"] || utag.ut.vi((new Date()).getTime());
                        utag.loader.SC("utag_main", {
                            "v_id": o["cp.utag_main_v_id"]
                        });
                    }
                    utag.loader.RDses(o);
                }
                if (a && !utag.cfg.noview)
                    utag.loader.RDses(o);
                utag.loader.RDqp(o);
                utag.loader.RDmeta(o);
                utag.loader.RDdom(o);
                utag.loader.RDut(o, a || "view");
                utag.loader.RDpv(o);
                utag.loader.RDva(o);
                utag.loader.RDlocalStorage(o);
                utag.loader.RDsessionStorage(o);
            },
            whitelistDefined: function() {
                return utag.cfg.split_cookie_allowlist && Array.isArray(utag.cfg.split_cookie_allowlist);
            },
            cookieIsAllowed: function(key) {
                return !utag.loader.whitelistDefined() || utag.cfg.split_cookie_allowlist.includes(key);
            },
            checkCookiesAgainstWhitelist: function() {
                if (!utag.loader.whitelistDefined()) {
                    return;
                }
                utag.loader.mapUtagCookies(function(cookie) {
                    if (!utag.loader.cookieIsAllowed(cookie.key.replace("utag_main_", ""))) {
                        utag.loader.deleteCookie(cookie.key);
                    }
                }, true);
            },
            deleteIndividualCookies: function() {
                utag.loader.mapUtagCookies(function(cookie) {
                    utag.loader.deleteCookie(cookie.key);
                });
            },
            deleteCookie: function(key) {
                document.cookie = key + "=; path=/;domain=" + utag.cfg.domain + ";max-age=0;";
            },
            getUtagCookies: function(onlyUtagMain=false) {
                var cookies = document.cookie.split("; ");
                var result = [];
                for (var i = 0; i < cookies.length; i++) {
                    var cookie = cookies[i];
                    if (cookie.startsWith(onlyUtagMain ? "utag_main_" : "utag_")) {
                        var kv = cookie.split("=");
                        result.push({
                            key: kv[0],
                            value: kv[1]
                        });
                    }
                }
                return result;
            },
            mapUtagCookies: function(mapFunction, onlyUtagMain=false) {
                var cookies = utag.loader.getUtagCookies(onlyUtagMain);
                for (var i = 0; i < cookies.length; i++) {
                    var cookie = cookies[i];
                    mapFunction(cookie);
                }
            },
            filterArray: function(array, predicate) {
                var y = 0;
                for (var x = 0; x < array.length; x++) {
                    if (predicate(array[x])) {
                        array[y] = array[x];
                        y++;
                    }
                }
                array.length = y;
            },
            RC: function(a, x, b, c, d, e, f, g, h, i, j, k, l, m, n, o, v, ck, cv, r, s, t) {
                o = {};
                b = ("" + document.cookie != "") ? (document.cookie).split("; ") : [];
                r = /^(.*?)=(.*)$/;
                s = /^(.*);exp-(.*)$/;
                t = (new Date()).getTime();
                var newMultiCookies;
                if (utag.loader.hasSplitUtagMainCookie()) {
                    newMultiCookies = utag.loader.readIndividualCookies();
                    utag.loader.filterArray(b, function(cookie) {
                        return !cookie.startsWith("utag_")
                    });
                }
                for (c = 0; c < b.length; c++) {
                    if (b[c].match(r)) {
                        ck = RegExp.$1;
                        cv = RegExp.$2;
                    }
                    e = utag.ut.decode(cv);
                    if (typeof ck != "undefined") {
                        if (ck.indexOf("ulog") == 0 || ck.indexOf("utag_") == 0) {
                            e = cv.split("$");
                            g = [];
                            j = {};
                            for (f = 0; f < e.length; f++) {
                                try {
                                    g = e[f].split(":");
                                    if (g.length > 2) {
                                        g[1] = g.slice(1).join(":");
                                    }
                                    v = "";
                                    if (("" + g[1]).indexOf("~") == 0) {
                                        h = g[1].substring(1).split("|");
                                        for (i = 0; i < h.length; i++)
                                            h[i] = utag.ut.decode(h[i]);
                                        v = h
                                    } else
                                        v = utag.ut.decode(g[1]);
                                    j[g[0]] = v;
                                } catch (er) {
                                    utag.DB(er)
                                }
                                ;
                            }
                            o[ck] = {};
                            for (f in utag.loader.GV(j)) {
                                if (utag.ut.typeOf(j[f]) == "array") {
                                    n = [];
                                    for (m = 0; m < j[f].length; m++) {
                                        if (j[f][m].match(s)) {
                                            k = (RegExp.$2 == "session") ? (typeof j._st != "undefined" ? j._st : t - 1) : parseInt(RegExp.$2);
                                            if (k > t)
                                                n[m] = (x == 0) ? j[f][m] : RegExp.$1;
                                        }
                                    }
                                    j[f] = n.join("|");
                                } else {
                                    j[f] = "" + j[f];
                                    if (j[f].match(s)) {
                                        k = (RegExp.$2 == "session") ? (typeof j._st != "undefined" ? j._st : t - 1) : parseInt(RegExp.$2);
                                        j[f] = (k < t) ? null : (x == 0 ? j[f] : RegExp.$1);
                                    }
                                }
                                if (j[f])
                                    o[ck][f] = j[f];
                            }
                        } else if (utag.cl[ck] || utag.cl['_all_']) {
                            o[ck] = e
                        }
                    }
                }
                if (newMultiCookies) {
                    Object.keys(newMultiCookies).forEach(function(tag) {
                        o[tag] = {};
                        Object.keys(newMultiCookies[tag]).forEach(function(key) {
                            o[tag][key] = newMultiCookies[tag][key].split(';exp-')[0]
                        })
                    });
                }
                return (a) ? (o[a] ? o[a] : {}) : o;
            },
            SC: function(a, b, c, d, e, f, g, h, i, j, k, x, v) {
                if (!a)
                    return 0;
                if (a == "utag_main" && utag.cfg.nocookie)
                    return 0;
                v = "";
                var date = new Date();
                var exp = new Date();
                var data;
                exp.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
                x = exp.toGMTString();
                if (c && c === "da" || (utag.cfg.split_cookie && c === 'd')) {
                    x = "Thu, 31 Dec 2009 00:00:00 GMT";
                    data = utag.loader.GV(b);
                } else if (a.indexOf("utag_") != 0 && a.indexOf("ulog") != 0) {
                    if (typeof b != "object") {
                        v = b
                    }
                } else {
                    if (utag.cfg.split_cookie) {
                        d = utag.loader.readIndividualCookies()[a] || {};
                        data = utag.loader.GV(b);
                    } else {
                        d = utag.loader.RC(a, 0);
                    }
                    for (e in utag.loader.GV(b)) {
                        f = "" + b[e];
                        if (f.match(/^(.*);exp-(\d+)(\w)$/)) {
                            g = date.getTime() + parseInt(RegExp.$2) * ((RegExp.$3 == "h") ? 3600000 : 86400000);
                            if (RegExp.$3 == "u")
                                g = parseInt(RegExp.$2);
                            f = RegExp.$1 + ";exp-" + g;
                        }
                        if (c == "i") {
                            if (d[e] == null)
                                d[e] = f;
                        } else if (c == "d")
                            delete d[e];
                        else if (c == "a")
                            d[e] = (d[e] != null) ? (f - 0) + (d[e] - 0) : f;
                        else if (c == "ap" || c == "au") {
                            if (d[e] == null)
                                d[e] = f;
                            else {
                                if (d[e].indexOf("|") > 0) {
                                    d[e] = d[e].split("|")
                                }
                                g = (utag.ut.typeOf(d[e]) == "array") ? d[e] : [d[e]];
                                g.push(f);
                                if (c == "au") {
                                    h = {};
                                    k = {};
                                    for (i = 0; i < g.length; i++) {
                                        if (g[i].match(/^(.*);exp-(.*)$/)) {
                                            j = RegExp.$1;
                                        }
                                        if (typeof k[j] == "undefined") {
                                            k[j] = 1;
                                            h[g[i]] = 1;
                                        }
                                    }
                                    g = [];
                                    for (i in utag.loader.GV(h)) {
                                        g.push(i);
                                    }
                                }
                                d[e] = g
                            }
                        } else
                            d[e] = f;
                    }
                    if (utag.loader.convertingToSplitCookies() === true) {
                        delete d[a];
                    }
                    data = utag.loader.GV(d);
                    h = new Array();
                    for (g in data) {
                        if (utag.ut.typeOf(d[g]) == "array") {
                            for (c = 0; c < d[g].length; c++) {
                                d[g][c] = encodeURIComponent(d[g][c])
                            }
                            h.push(g + ":~" + d[g].join("|"))
                        } else
                            h.push((g + ":").replace(/[\,\$\;\?]/g, "") + encodeURIComponent(d[g]))
                    }
                    if (h.length == 0) {
                        h.push("");
                        x = ""
                    }
                    v = (h.join("$"));
                }
                if (utag.cfg.split_cookie && c !== 'da' && c !== 'd') {
                    utag.loader.prepareAndWriteCookies(a, data, x);
                } else if (utag.cfg.split_cookie) {
                    utag.loader.mapUtagCookies(function(cookieInfo) {
                        var cookiesToDelete = Object.keys(data || {}).map(function(key) {
                            return a + '_' + key
                        });
                        if ((c === 'da' && cookieInfo.key.startsWith(a)) || (c === 'd' && cookiesToDelete.indexOf(cookieInfo.key) !== -1)) {
                            document.cookie = cookieInfo.key + "=" + v + ";path=/;domain=" + utag.cfg.domain + ";expires=" + x + (utag.cfg.secure_cookie ? ";secure" : "");
                        }
                    })
                } else {
                    document.cookie = a + "=" + v + ";path=/;domain=" + utag.cfg.domain + ";expires=" + x + (utag.cfg.secure_cookie ? ";secure" : "");
                }
                return 1
            },
            prepareAndWriteCookies: function(tag, data, expiration) {
                var defaultSessionExpirationCookies = ["_pn", "_ss", "_st", "_ses_id", "_se"];
                var originalExpiration = expiration;
                if (Object.keys(data).length > 0) {
                    for (var key in data) {
                        expiration = originalExpiration;
                        if (!utag.loader.cookieIsAllowed(key)) {
                            continue;
                        }
                        var value = String(data[key]);
                        if (defaultSessionExpirationCookies.includes(key)) {
                            value = utag.loader.addExpSessionFlag(value);
                        }
                        if (value.match(/exp-(\d+|session)$/)) {
                            var expValue = RegExp.$1;
                            if (expValue === "session" && !!utag.cfg.session_timeout) {
                                value = utag.loader.addExpSessionFlag(value);
                                expiration = new Date();
                                expiration.setTime(expiration.getTime() + parseInt(utag.cfg.session_timeout));
                                expiration = expiration.toGMTString();
                            } else {
                                var expInt = parseInt(expValue);
                                if (!!expInt) {
                                    value = utag.loader.addExpFlag(value, expInt);
                                    expiration = new Date(expInt);
                                    expiration = expiration.toGMTString();
                                }
                            }
                        }
                        utag.loader.writeCookie(tag + "_" + key, value, expiration);
                    }
                    utag.loader.deleteCookie(tag);
                }
            },
            writeCookie: function(key, value, expiration) {
                if (value.includes(";")) {
                    value = value.replace(/;/g, encodeURIComponent(";"));
                }
                document.cookie = key + "=" + value + ";path=/;domain=" + utag.cfg.domain + ";expires=" + expiration + (utag.cfg.secure_cookie ? ";secure" : "");
            },
            LOAD: function(a, b, c, d) {
                if (!utag.loader.cfg) {
                    return
                }
                if (this.ol == 0) {
                    if (utag.loader.cfg[a].block && utag.loader.cfg[a].cbf) {
                        this.f[a] = 1;
                        delete utag.loader.bq[a];
                    }
                    for (b in utag.loader.GV(utag.loader.bq)) {
                        if (utag.loader.cfg[a].load == 4 && utag.loader.cfg[a].wait == 0) {
                            utag.loader.bk[a] = 1;
                            utag.DB("blocked: " + a);
                        }
                        utag.DB("blocking: " + b);
                        return;
                    }
                    utag.loader.INIT();
                    return;
                }
                utag.DB('utag.loader.LOAD:' + a);
                if (this.f[a] == 0) {
                    this.f[a] = 1;
                    if (utag.cfg.noview != true) {
                        if (utag.loader.cfg[a].send) {
                            utag.DB("SENDING: " + a);
                            try {
                                if (utag.loader.sendq.pending > 0 && utag.loader.sendq[a]) {
                                    utag.DB("utag.loader.LOAD:sendq: " + a);
                                    while (d = utag.loader.sendq[a].shift()) {
                                        utag.DB(d);
                                        utag.sender[a].send(d.event, utag.handler.C(d.data));
                                        utag.loader.sendq.pending--;
                                    }
                                } else {
                                    utag.sender[a].send('view', utag.handler.C(utag.data));
                                }
                                utag.rpt['s_' + a] = 0;
                            } catch (e) {
                                utag.DB(e);
                                utag.rpt['s_' + a] = 1;
                            }
                        }
                    }
                    if (utag.loader.rf == 0)
                        return;
                    for (b in utag.loader.GV(this.f)) {
                        if (this.f[b] == 0 || this.f[b] == 2)
                            return
                    }
                    utag.loader.END();
                }
            },
            EV: function(a, b, c, d) {
                if (b == "ready") {
                    if (!utag.data) {
                        try {
                            utag.cl = {
                                '_all_': 1
                            };
                            utag.loader.initdata();
                            utag.loader.RD(utag.data);
                        } catch (e) {
                            utag.DB(e)
                        }
                        ;
                    }
                    if ((document.attachEvent || utag.cfg.dom_complete) ? document.readyState === "complete" : document.readyState !== "loading")
                        setTimeout(c, 1);
                    else {
                        utag.loader.ready_q.push(c);
                        var RH;
                        if (utag.loader.ready_q.length <= 1) {
                            if (document.addEventListener) {
                                RH = function() {
                                    document.removeEventListener("DOMContentLoaded", RH, false);
                                    utag.loader.run_ready_q()
                                }
                                ;
                                if (!utag.cfg.dom_complete)
                                    document.addEventListener("DOMContentLoaded", RH, false);
                                window.addEventListener("load", utag.loader.run_ready_q, false);
                            } else if (document.attachEvent) {
                                RH = function() {
                                    if (document.readyState === "complete") {
                                        document.detachEvent("onreadystatechange", RH);
                                        utag.loader.run_ready_q()
                                    }
                                }
                                ;
                                document.attachEvent("onreadystatechange", RH);
                                window.attachEvent("onload", utag.loader.run_ready_q);
                            }
                        }
                    }
                } else {
                    if (a.addEventListener) {
                        a.addEventListener(b, c, false)
                    } else if (a.attachEvent) {
                        a.attachEvent(((d == 1) ? "" : "on") + b, c)
                    }
                }
            },
            END: function(b, c, d, e, v, w) {
                if (this.ended) {
                    return
                }
                ;this.ended = 1;
                utag.DB("loader.END");
                b = utag.data;
                if (utag.handler.base && utag.handler.base != '*') {
                    e = utag.handler.base.split(",");
                    for (d = 0; d < e.length; d++) {
                        if (typeof b[e[d]] != "undefined")
                            utag.handler.df[e[d]] = b[e[d]]
                    }
                } else if (utag.handler.base == '*') {
                    utag.ut.merge(utag.handler.df, b, 1);
                }
                utag.rpt['r_0'] = "t";
                for (var r in utag.loader.GV(utag.cond)) {
                    utag.rpt['r_' + r] = (utag.cond[r]) ? "t" : "f";
                }
                utag.rpt.ts['s'] = new Date();
                v = utag.cfg.path;
                w = v.indexOf(".tiqcdn.");
                if (w > 0 && b["cp.utag_main__ss"] == 1 && !utag.cfg.no_session_count)
                    utag.ut.loader({
                        src: v.substring(0, v.indexOf("/ut" + "ag/") + 6) + "tiqapp/ut" + "ag.v.js?a=" + utag.cfg.utid + (utag.cfg.nocookie ? "&nocookie=1" : "&cb=" + (new Date).getTime()),
                        id: "tiqapp"
                    })
                if (utag.cfg.noview != true)
                    utag.handler.RE('view', b, "end");
                utag.handler.INIT();
            }
        },
        DB: function(a, b) {
            if (utag.cfg.utagdb === false) {
                return;
            } else if (typeof utag.cfg.utagdb == "undefined") {
                b = document.cookie + '';
                utag.cfg.utagdb = ((b.indexOf('utagdb=true') >= 0) ? true : false);
            }
            if (utag.cfg.utagdb === true) {
                var t;
                if (utag.ut.typeOf(a) == "object") {
                    t = utag.handler.C(a)
                } else {
                    t = a
                }
                utag.db_log.push(t);
                try {
                    if (!utag.cfg.noconsole)
                        console.log(t)
                } catch (e) {}
            }
        },
        RP: function(a, b, c) {
            if (typeof a != 'undefined' && typeof a.src != 'undefined' && a.src != '') {
                b = [];
                for (c in utag.loader.GV(a)) {
                    if (c != 'src')
                        b.push(c + '=' + escape(a[c]))
                }
                this.dbi.push((new Image()).src = a.src + '?utv=' + utag.cfg.v + '&utid=' + utag.cfg.utid + '&' + (b.join('&')))
            }
        },
        view: function(a, c, d) {
            return this.track({
                event: 'view',
                data: a || {},
                cfg: {
                    cb: c,
                    uids: d
                }
            })
        },
        link: function(a, c, d) {
            return this.track({
                event: 'link',
                data: a || {},
                cfg: {
                    cb: c,
                    uids: d
                }
            })
        },
        track: function(a, b, c, d, e) {
            a = a || {};
            if (typeof a == "string") {
                a = {
                    event: a,
                    data: b || {},
                    cfg: {
                        cb: c,
                        uids: d
                    }
                }
            }
            for (e in utag.loader.GV(utag.o)) {
                utag.o[e].handler.trigger(a.event || "view", a.data || a, a.cfg || {
                    cb: b,
                    uids: c
                })
            }
            a.cfg = a.cfg || {
                cb: b
            };
            if (typeof a.cfg.cb == "function")
                a.cfg.cb();
            return true
        },
        handler: {
            base: "",
            df: {},
            o: {},
            send: {},
            iflag: 0,
            INIT: function(a, b, c) {
                utag.DB('utag.handler.INIT');
                if (utag.initcatch) {
                    utag.initcatch = 0;
                    return
                }
                this.iflag = 1;
                a = utag.loader.q.length;
                if (a > 0) {
                    utag.DB("Loader queue");
                    for (b = 0; b < a; b++) {
                        c = utag.loader.q[b];
                        utag.handler.trigger(c.a, c.b, c.c)
                    }
                }
            },
            test: function() {
                return 1
            },
            LR: function(b) {
                utag.DB("Load Rules");
                for (var d in utag.loader.GV(utag.cond)) {
                    utag.cond[d] = false;
                }
                utag.DB(b);
                utag.loader.loadrules(b);
                utag.DB(utag.cond);
                utag.loader.initcfg();
                utag.loader.OU();
                for (var r in utag.loader.GV(utag.cond)) {
                    utag.rpt['r_' + r] = (utag.cond[r]) ? "t" : "f";
                }
            },
            RE: function(a, b, c, d, e, f, g) {
                if (c != "alr" && !this.cfg_extend) {
                    return 0;
                }
                utag.DB("RE: " + c);
                if (c == "alr")
                    utag.DB("All Tags EXTENSIONS");
                utag.DB(b);
                if (typeof this.extend != "undefined") {
                    g = 0;
                    for (d = 0; d < this.extend.length; d++) {
                        try {
                            e = 0;
                            if (typeof this.cfg_extend != "undefined") {
                                f = this.cfg_extend[d];
                                if (typeof f.count == "undefined")
                                    f.count = 0;
                                if (f[a] == 0 || (f.once == 1 && f.count > 0) || f[c] == 0) {
                                    e = 1
                                } else {
                                    if (f[c] == 1) {
                                        g = 1
                                    }
                                    ;f.count++
                                }
                            }
                            if (e != 1) {
                                this.extend[d](a, b);
                                utag.rpt['ex_' + d] = 0
                            }
                        } catch (er) {
                            utag.DB(er);
                            utag.rpt['ex_' + d] = 1;
                            utag.ut.error({
                                e: er.message,
                                s: utag.cfg.path + 'utag.js',
                                l: d,
                                t: 'ge'
                            });
                        }
                    }
                    utag.DB(b);
                    return g;
                }
            },
            trigger: function(a, b, c, d, e, f) {
                utag.DB('trigger:' + a + (c && c.uids ? ":" + c.uids.join(",") : ""));
                b = b || {};
                utag.DB(b);
                if (!this.iflag) {
                    utag.DB("trigger:called before tags loaded");
                    for (d in utag.loader.f) {
                        if (!(utag.loader.f[d] === 1))
                            utag.DB('Tag ' + d + ' did not LOAD')
                    }
                    utag.loader.q.push({
                        a: a,
                        b: utag.handler.C(b),
                        c: c
                    });
                    return;
                }
                utag.ut.merge(b, this.df, 0);
                utag.loader.RD(b, a);
                utag.cfg.noview = false;
                function sendTag(a, b, d) {
                    try {
                        if (typeof utag.sender[d] != "undefined") {
                            utag.DB("SENDING: " + d);
                            utag.sender[d].send(a, utag.handler.C(b));
                            utag.rpt['s_' + d] = 0;
                        } else if (utag.loader.cfg[d].load != 2) {
                            utag.loader.sendq[d] = utag.loader.sendq[d] || [];
                            utag.loader.sendq[d].push({
                                "event": a,
                                "data": utag.handler.C(b)
                            });
                            utag.loader.sendq.pending++;
                            utag.loader.AS({
                                id: d,
                                load: 1
                            });
                        }
                    } catch (e) {
                        utag.DB(e)
                    }
                }
                if (c && c.uids) {
                    this.RE(a, b, "alr");
                    for (f = 0; f < c.uids.length; f++) {
                        d = c.uids[f];
                        if (!utag.loader.OU(utag.loader.cfg[d].tid)) {
                            sendTag(a, b, d);
                        }
                    }
                } else if (utag.cfg.load_rules_ajax) {
                    this.RE(a, b, "blr");
                    this.LR(b);
                    this.RE(a, b, "alr");
                    for (f = 0; f < utag.loader.cfgsort.length; f++) {
                        d = utag.loader.cfgsort[f];
                        if (utag.loader.cfg[d].load && utag.loader.cfg[d].send) {
                            sendTag(a, b, d);
                        }
                    }
                } else {
                    this.RE(a, b, "alr");
                    for (d in utag.loader.GV(utag.sender)) {
                        sendTag(a, b, d);
                    }
                }
                this.RE(a, b, "end");
            },
            C: function(a, b, c) {
                b = {};
                for (c in utag.loader.GV(a)) {
                    if (utag.ut.typeOf(a[c]) == "array") {
                        b[c] = a[c].slice(0)
                    } else {
                        b[c] = a[c]
                    }
                }
                return b
            }
        },
        ut: {
            pad: function(a, b, c, d) {
                a = "" + ((a - 0).toString(16));
                d = '';
                if (b > a.length) {
                    for (c = 0; c < (b - a.length); c++) {
                        d += '0'
                    }
                }
                return "" + d + a
            },
            vi: function(t, a, b) {
                if (!utag.v_id) {
                    a = this.pad(t, 12);
                    b = "" + Math.random();
                    a += this.pad(b.substring(2, b.length), 16);
                    try {
                        a += this.pad((navigator.plugins.length ? navigator.plugins.length : 0), 2);
                        a += this.pad(navigator.userAgent.length, 3);
                        a += this.pad(document.URL.length, 4);
                        a += this.pad(navigator.appVersion.length, 3);
                        a += this.pad(screen.width + screen.height + parseInt((screen.colorDepth) ? screen.colorDepth : screen.pixelDepth), 5)
                    } catch (e) {
                        utag.DB(e);
                        a += "12345"
                    }
                    ;utag.v_id = a;
                }
                return utag.v_id
            },
            hasOwn: function(o, a) {
                return o != null && Object.prototype.hasOwnProperty.call(o, a)
            },
            isEmptyObject: function(o, a) {
                for (a in o) {
                    if (utag.ut.hasOwn(o, a))
                        return false
                }
                return true
            },
            isEmpty: function(o) {
                var t = utag.ut.typeOf(o);
                if (t == "number") {
                    return isNaN(o)
                } else if (t == "boolean") {
                    return false
                } else if (t == "string") {
                    return o.length === 0
                } else
                    return utag.ut.isEmptyObject(o)
            },
            typeOf: function(e) {
                return ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
            },
            flatten: function(o) {
                var a = {};
                function r(c, p) {
                    if (Object(c) !== c || utag.ut.typeOf(c) == "array") {
                        a[p] = c;
                    } else {
                        if (utag.ut.isEmptyObject(c)) {} else {
                            for (var d in c) {
                                r(c[d], p ? p + "." + d : d);
                            }
                        }
                    }
                }
                r(o, "");
                return a;
            },
            merge: function(a, b, c, d) {
                if (c) {
                    for (d in utag.loader.GV(b)) {
                        a[d] = b[d]
                    }
                } else {
                    for (d in utag.loader.GV(b)) {
                        if (typeof a[d] == "undefined")
                            a[d] = b[d]
                    }
                }
            },
            decode: function(a, b) {
                b = "";
                try {
                    b = decodeURIComponent(a)
                } catch (e) {
                    utag.DB(e)
                }
                ;if (b == "") {
                    b = unescape(a)
                }
                ;return b
            },
            encode: function(a, b) {
                b = "";
                try {
                    b = encodeURIComponent(a)
                } catch (e) {
                    utag.DB(e)
                }
                ;if (b == "") {
                    b = escape(a)
                }
                ;return b
            },
            error: function(a, b, c) {
                if (typeof utag_err != "undefined") {
                    utag_err.push(a)
                }
            },
            loader: function(o, a, b, c, l, m) {
                utag.DB(o);
                a = document;
                if (o.type == "iframe") {
                    m = a.getElementById(o.id);
                    if (m && m.tagName == "IFRAME") {
                        m.parentNode.removeChild(m);
                    }
                    b = a.createElement("iframe");
                    o.attrs = o.attrs || {};
                    utag.ut.merge(o.attrs, {
                        "height": "1",
                        "width": "1",
                        "style": "display:none"
                    }, 0);
                } else if (o.type == "img") {
                    utag.DB("Attach img: " + o.src);
                    b = new Image();
                } else {
                    b = a.createElement("script");
                    b.language = "javascript";
                    b.type = "text/javascript";
                    b.async = 1;
                    b.charset = "utf-8";
                }
                if (o.id) {
                    b.id = o.id
                }
                ;for (l in utag.loader.GV(o.attrs)) {
                    b.setAttribute(l, o.attrs[l])
                }
                b.setAttribute("src", o.src);
                if (typeof o.cb == "function") {
                    if (b.addEventListener) {
                        b.addEventListener("load", function() {
                            o.cb()
                        }, false);
                    } else {
                        b.onreadystatechange = function() {
                            if (this.readyState == 'complete' || this.readyState == 'loaded') {
                                this.onreadystatechange = null;
                                o.cb()
                            }
                        }
                        ;
                    }
                }
                if (typeof o.error == "function") {
                    utag.loader.EV(b, "error", o.error);
                }
                if (o.type != "img") {
                    l = o.loc || "head";
                    c = a.getElementsByTagName(l)[0];
                    if (c) {
                        utag.DB("Attach to " + l + ": " + o.src);
                        if (l == "script") {
                            c.parentNode.insertBefore(b, c);
                        } else {
                            c.appendChild(b)
                        }
                    }
                }
            }
        }
    };
    utag.o['basf.cxm-tools'] = utag;
    utag.cfg = {
        template: "ut4.51.",
        load_rules_ajax: true,
        load_rules_at_wait: false,
        lowerqp: false,
        noconsole: false,
        session_timeout: 1800000,
        readywait: 0,
        noload: 0,
        domain: utag.loader.lh(),
        datasource: "##UTDATASOURCE##".replace("##" + "UTDATASOURCE##", ""),
        secure_cookie: ("##UTSECURECOOKIE##".replace("##" + "UTSECURECOOKIE##", "") === "true") ? true : false,
        path: "//tags.tiqcdn.com/utag/basf/cxm-tools/qa/",
        utid: "basf/cxm-tools/202402160957",
        ignoreSessionStorage: false,
        ignoreLocalStorage: false,
        split_cookie: true
    };
    utag.cfg.v = utag.cfg.template + "202402160958";
    utag.cond = {
        18: 0,
        6: 0
    };
    utag.pagevars = function(ud) {
        ud = ud || utag.data;
        try {
            ud['js_page.OnetrustActiveGroups'] = OnetrustActiveGroups
        } catch (e) {
            utag.DB(e)
        }
        ;try {
            ud['js_page.OptanonActiveGroups'] = OptanonActiveGroups
        } catch (e) {
            utag.DB(e)
        }
        ;
    }
    ;
    utag.loader.initdata = function() {
        try {
            utag.data = (typeof utag_data != 'undefined') ? utag_data : {};
            utag.udoname = 'utag_data';
        } catch (e) {
            utag.data = {};
            utag.DB('idf:' + e);
        }
    }
    ;
    utag.loader.loadrules = function(_pd, _pc) {
        var d = _pd || utag.data;
        var c = _pc || utag.cond;
        for (var l in utag.loader.GV(c)) {
            switch (l) {
            case '18':
                try {
                    c[18] |= (d['app_object_flag'] == '1')
                } catch (e) {
                    utag.DB(e)
                }
                ;break;
            case '6':
                try {
                    c[6] |= (typeof d['cp.OptanonConsent'] != 'undefined' && d['cp.OptanonConsent'].toString().indexOf('C0013:1') > -1) || (typeof d['js_page.OnetrustActiveGroups'] != 'undefined' && d['js_page.OnetrustActiveGroups'].toString().indexOf(',C0013') > -1) || (typeof d['js_page.OptanonActiveGroups'] != 'undefined' && d['js_page.OptanonActiveGroups'].toString().indexOf(',C0013') > -1) || (typeof d['cp.OptanonConsent'] != 'undefined' && d['cp.OptanonConsent'].toString().indexOf('PIANO:1') > -1) || (d['dom.url'].toString().indexOf('onetrust-scan') > -1) || (d['dom.url'].toString().indexOf('one-trust-scan') > -1) || (d['dom.url'].toString().indexOf('manifest-cookies=1') > -1)
                } catch (e) {
                    utag.DB(e)
                }
                ;break;
            }
        }
    }
    ;
    utag.pre = function() {
        utag.loader.initdata();
        utag.pagevars();
        try {
            utag.loader.RD(utag.data)
        } catch (e) {
            utag.DB(e)
        }
        ;utag.loader.loadrules();
    }
    ;
    utag.loader.GET = function() {
        utag.cl = {
            '_all_': 1
        };
        utag.pre();
        utag.handler.extend = [function(a, b) {
            try {
                if (typeof b['single_page_app'] == 'undefined') {
                    utag.ut.merge(b, utag.data, 0);
                    utag.ut.merge(utag.data, b, 1);
                }
            } catch (e) {
                utag.DB(e)
            }
        }
        , function(a, b) {
            try {
                if (1) {
                    try {
                        b['onetrust_domain_id'] = OneTrust.GetDomainData().cctId
                    } catch (e) {}
                    ;try {
                        b['onetrust_domain_id'] = window.country
                    } catch (e) {}
                    ;try {
                        b['onetrust_domain_id'] = window.cctId
                    } catch (e) {}
                }
            } catch (e) {
                utag.DB(e);
            }
        }
        , function(a, b, c) {
            for (c in utag.loader.GV(b)) {
                if (c === 'cp.trace_id')
                    continue;
                try {
                    b[c] = b[c]instanceof Array ? b[c] : b[c]instanceof Object ? b[c] : b[c].toString().toLowerCase();
                } catch (e) {
                    utag.DB(e);
                }
            }
        }
        , function(a, b) {
            try {
                if (typeof b['at_level2_numbering'] != 'undefined') {
                    b['at_click_level_2'] = b['at_level2_numbering']
                }
            } catch (e) {
                utag.DB(e);
            }
        }
        , function(a, b, c, d) {
            try {
                if (1) {
                    c = [b['page_name'], b['at_url_clean']];
                    b['at_title_url'] = c.join('||')
                }
            } catch (e) {
                utag.DB(e);
            }
        }
        , function(a, b) {
            try {
                if (1) {
                    console.log("Set data-tealium attributes at After Tag Extensions");
                    a_tealiumDataAuthor();
                }
            } catch (e) {
                utag.DB(e)
            }
        }
        ];
        utag.handler.cfg_extend = [{
            "end": 0,
            "alr": 0,
            "bwq": 0,
            "id": "45",
            "blr": 1
        }, {
            "bwq": 0,
            "id": "159",
            "alr": 0,
            "end": 0,
            "blr": 1
        }, {
            "end": 0,
            "alr": 1,
            "bwq": 0,
            "id": "4",
            "blr": 0
        }, {
            "end": 0,
            "alr": 1,
            "bwq": 0,
            "id": "16",
            "blr": 0
        }, {
            "end": 0,
            "alr": 1,
            "bwq": 0,
            "id": "17",
            "blr": 0
        }, {
            "end": 1,
            "alr": 0,
            "bwq": 0,
            "id": "175",
            "blr": 0
        }];
        utag.loader.initcfg = function() {
            utag.loader.cfg = {
                "13": {
                    load: ((utag.cond[6] || utag.cond[18])),
                    send: 1,
                    v: 202402160957,
                    wait: 1,
                    tid: 1231
                }
            };
            utag.loader.cfgsort = ["13"];
        }
        utag.loader.initcfg();
    }
    if (typeof utag_cfg_ovrd != 'undefined') {
        for (utag._i in utag.loader.GV(utag_cfg_ovrd))
            utag.cfg[utag._i] = utag_cfg_ovrd[utag._i]
    }
    ;utag.loader.PINIT = function(a, b, c) {
        utag.DB("Pre-INIT");
        if (utag.cfg.noload) {
            return;
        }
        try {
            this.GET();
            if (utag.handler.RE('view', utag.data, "blr")) {
                utag.handler.LR(utag.data);
            }
        } catch (e) {
            utag.DB(e)
        }
        ;a = this.cfg;
        c = 0;
        for (b in this.GV(a)) {
            if (a[b].block == 1 || (a[b].load > 0 && (typeof a[b].src != 'undefined' && a[b].src != ''))) {
                a[b].block = 1;
                c = 1;
                this.bq[b] = 1;
            }
        }
        if (c == 1) {
            for (b in this.GV(a)) {
                if (a[b].block) {
                    a[b].id = b;
                    if (a[b].load == 4)
                        a[b].load = 1;
                    a[b].cb = function() {
                        var d = this.uid;
                        utag.loader.cfg[d].cbf = 1;
                        utag.loader.LOAD(d)
                    }
                    ;
                    this.AS(a[b]);
                }
            }
        }
        if (c == 0)
            this.INIT();
    }
    ;
    utag.loader.INIT = function(a, b, c, d, e) {
        utag.DB('utag.loader.INIT');
        if (this.ol == 1)
            return -1;
        else
            this.ol = 1;
        if (utag.cfg.noview != true)
            utag.handler.RE('view', utag.data, "alr");
        utag.rpt.ts['i'] = new Date();
        d = this.cfgsort;
        for (a = 0; a < d.length; a++) {
            e = d[a];
            b = this.cfg[e];
            b.id = e;
            if (b.block != 1) {
                if (utag.loader.bk[b.id] || ((utag.cfg.readywait || utag.cfg.noview) && b.load == 4)) {
                    this.f[b.id] = 0;
                    utag.loader.LOAD(b.id)
                } else if (b.wait == 1 && utag.loader.rf == 0) {
                    utag.DB('utag.loader.INIT: waiting ' + b.id);
                    this.wq.push(b)
                    this.f[b.id] = 2;
                } else if (b.load > 0) {
                    utag.DB('utag.loader.INIT: loading ' + b.id);
                    this.lq.push(b);
                    this.AS(b);
                }
            }
        }
        if (this.wq.length > 0)
            utag.loader.EV('', 'ready', function(a) {
                if (utag.loader.rf == 0) {
                    utag.DB('READY:utag.loader.wq');
                    utag.loader.rf = 1;
                    utag.loader.WQ();
                }
            });
        else if (this.lq.length > 0)
            utag.loader.rf = 1;
        else if (this.lq.length == 0)
            utag.loader.END();
        return 1
    }
    ;
    utag.loader.EV('', 'ready', function(a) {
        if (utag.loader.efr != 1) {
            utag.loader.efr = 1;
            try {
                try {
                    if (1) {
                        setDataLayer();
                    }
                } catch (e) {
                    utag.DB(e)
                }
            } catch (e) {
                utag.DB(e)
            }
            ;try {
                try {
                    if (1) {
                        console.log("Set data-tealium attributes at DOM Ready");
                        a_tealiumDataAuthor();
                    }
                } catch (e) {
                    utag.DB(e)
                }
            } catch (e) {
                utag.DB(e)
            }
            ;try {
                if (typeof utag.runonce == 'undefined')
                    utag.runonce = {};
                utag.jdh = function(h, i, j, k) {
                    h = utag.jdhc.length;
                    if (h == 0)
                        window.clearInterval(utag.jdhi);
                    else {
                        for (i = 0; i < h; i++) {
                            j = utag.jdhc[i];
                            k = jQuery(j.i).is(":visible") ? 1 : 0;
                            if (k != j.s) {
                                if (j.e == (j.s = k))
                                    jQuery(j.i).trigger(j.e ? "afterShow" : "afterHide")
                            }
                        }
                    }
                }
                ;
                utag.jdhi = window.setInterval(utag.jdh, 250);
                utag.jdhc = [];
                if (typeof utag.data['event_value'] != 'undefined' || utag.data['event_value'] != '') {
                    if (typeof utag.runonce[37] == 'undefined') {
                        utag.runonce[37] = 1;
                        jQuery(document.body).on('mousedown', 'a[data-tealium-type]', function(e) {
                            utag.link({
                                "event_category": $(this).closest("*[data-tealium-category]").attr("data-tealium-category"),
                                "event_action": $(this).closest("*[data-tealium-action]").attr("data-tealium-action"),
                                "event_value": $(this).closest("*[data-tealium-value]").attr("data-tealium-value").replace(/%23.*/, "").replace("%3F", ""),
                                "event_type": $(this).closest("*[data-tealium-type]").attr("data-tealium-type"),
                                "event_name": 'click',
                                "event_elem": this
                            })
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
            ;try {
                if (typeof utag.data['event_value'] != 'undefined' || utag.data['event_value'] != '') {
                    if (typeof utag.runonce[183] == 'undefined') {
                        utag.runonce[183] = 1;
                        jQuery(document.body).on('mousedown', 'button[data-tealium-type]', function(e) {
                            utag.link({
                                "event_category": $(this).closest("*[data-tealium-category]").attr("data-tealium-category"),
                                "event_action": $(this).closest("*[data-tealium-action]").attr("data-tealium-action"),
                                "event_value": $(this).closest("*[data-tealium-value]").attr("data-tealium-value"),
                                "event_type": $(this).closest("*[data-tealium-type]").attr("data-tealium-type"),
                                "event_name": 'click',
                                "event_elem": this
                            })
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
            ;try {
                if (typeof utag.data['event_value'] != 'undefined' || utag.data['event_value'] != '') {
                    if (typeof utag.runonce[177] == 'undefined') {
                        utag.runonce[177] = 1;
                        jQuery(document.body).on('change', 'input[data-tealium-type]', function(e) {
                            utag.link({
                                "event_category": $(this).closest("*[data-tealium-category]").attr("data-tealium-category"),
                                "event_action": $(this).closest("*[data-tealium-action]").attr("data-tealium-action"),
                                "event_value": $(this).closest("*[data-tealium-value]").attr("data-tealium-value"),
                                "event_type": $(this).closest("*[data-tealium-type]").attr("data-tealium-type"),
                                "event_name": 'change',
                                "event_elem": this
                            })
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
            ;try {
                if ((typeof utag.data['event_value'] != 'undefined' && utag.data['event_value'] != '')) {
                    if (typeof utag.runonce[178] == 'undefined') {
                        utag.runonce[178] = 1;
                        jQuery(document.body).on('change', 'select[data-tealium-type]', function(e) {
                            utag.link({
                                "event_category": $(this).closest("*[data-tealium-category]").attr("data-tealium-category"),
                                "event_action": $(this).closest("*[data-tealium-action]").attr("data-tealium-action"),
                                "event_value": $(this).closest("*[data-tealium-value]").attr("data-tealium-value"),
                                "event_type": $(this).closest("*[data-tealium-type]").attr("data-tealium-type"),
                                "event_name": 'change',
                                "event_elem": this
                            })
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
            ;try {
                if (utag.data['event_value'] != '' || typeof utag.data['event_value'] != 'undefined') {
                    if (typeof utag.runonce[179] == 'undefined') {
                        utag.runonce[179] = 1;
                        jQuery(document.body).on('change', 'textarea[data-tealium-type]', function(e) {
                            utag.link({
                                "event_category": $(this).closest("*[data-tealium-category]").attr("data-tealium-category"),
                                "event_action": $(this).closest("*[data-tealium-action]").attr("data-tealium-action"),
                                "event_value": $(this).closest("*[data-tealium-value]").attr("data-tealium-value"),
                                "event_type": $(this).closest("*[data-tealium-type]").attr("data-tealium-type"),
                                "event_name": 'click',
                                "event_elem": this
                            })
                        });
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
            ;
        }
    })
    if (utag.cfg.readywait || utag.cfg.waittimer) {
        utag.loader.EV('', 'ready', function(a) {
            if (utag.loader.rf == 0) {
                utag.loader.rf = 1;
                utag.cfg.readywait = 1;
                utag.DB('READY:utag.cfg.readywait');
                setTimeout(function() {
                    utag.loader.PINIT()
                }, utag.cfg.waittimer || 1);
            }
        })
    } else {
        utag.loader.PINIT()
    }
}
