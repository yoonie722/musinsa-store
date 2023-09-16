(function (win, $) {
	'use strict';
	win.PROJECTORY = win.PROJECTORY || {};

	win.PROJECTORY.commonJs = function () {
		this.init();
	};

	// Common
	win.PROJECTORY.commonJs.prototype = {
		init : function () {
			this.setElement();
			this.bindEvents();
		},
		setElement : function () {
			this.bodyArea = $('body');
			this.headerArea = $('.header');
			this.contentArea = $('.container');
			this.footerArea = $('.footer');

			// GNB
			this.listGnb = this.headerArea.find('.list_gnb');
			this.itemGnb = this.listGnb.find('.items_gnb');
			this.btnGnb = this.itemGnb.find('.btn_gnb');
			this.gnbCurrentIdx = this.listGnb.find('.is_active_gnb').index();
			this.gnbPrevIdx = this.gnbCurrentIdx;
			this.btnSubGnb = this.itemGnb.find('.btn_gnb');

			// ham, sitemap
			this.btnHam = this.headerArea.find('.btn_hamburger');
			this.areaSitemap = this.bodyArea.find('.layer_sitemap');
			this.btnSitemapClose = this.areaSitemap.find('.btn_close');
			this.itemsSitemap = this.areaSitemap.find('.items_sitemap');
			this.btnSiteMapToggle = this.itemsSitemap.find('.btn_sitemap');
			this.sitemapCurrentIdx = this.areaSitemap.find('.is_active_gnb').index();
			this.sitemapPrevIdx = this.sitemapCurrentIdx;
			// sitemap - familysite
			this.boxFamilSiteSiteMap = this.areaSitemap.find('.box_familysite');
			this.innerFamilSiteSiteMap = this.boxFamilSiteSiteMap.find('.inner_familysite');
			this.btnFamilSiteSiteMap = this.boxFamilSiteSiteMap.find('.btn_familysite');
			this.linkFamilSiteSiteMap = this.boxFamilSiteSiteMap.find('.link_familysite');

			// Header - familysite
			this.areaFamilySite = this.headerArea.find('.area_header_familysite');
			this.btnFamilySite = this.areaFamilySite.find('.btn_familysite');
			this.linkFamilySite = this.areaFamilySite.find('.link_familysite');

			// footer - familysite
			this.areaFooterFamilySite = this.footerArea.find('.area_footer_familysite');
			this.btnFooterFamilySite = this.footerArea.find('.btn_familysite');
			this.linkFooterFamilySite = this.footerArea.find('.link_familysite');
		},
		bindEvents : function () {

			$(win).on('scroll resize', $.proxy(this.onScrollFunc, this));

      // GNB
			this.btnGnb.on('click', $.proxy(this.gnbActiveFunc, this));
			this.btnSubGnb.on('focus', $.proxy(this.gnbActiveFunc, this));
			this.listGnb.on('mouseout', $.proxy(this.gnbCloseFunc, this));
      // Header - familysite
			this.btnFamilySite.on('click', $.proxy(this.familySiteOpenFunc, this));
			this.linkFamilySite.on('focus', $.proxy(this.familySiteOpenFunc, this));
			this.areaFamilySite.on('mouseout', $.proxy(this.familySiteCloseFunc, this));
			this.areaFamilySite.on('focusout', $.proxy(this.familySiteCloseFunc, this));

      // ham, sitemap
			$(win).on('load resize', $.proxy(this.btnSiteMapToggleActiveFunc, this));
			this.btnHam.on('click', $.proxy(this.sitemapOpenFunc, this));
			this.btnSitemapClose.on('click', $.proxy(this.sitemapCloseFunc, this));
			this.btnSiteMapToggle.on('click', $.proxy(this.sitemapToggleFunc, this));
			// sitemap - familysite
			this.btnFamilSiteSiteMap.on('click', $.proxy(this.sitemapFamilyOpenFunc, this));
			this.areaFamilySite.on('mouseout', $.proxy(this.sitemapFamilyCloseFunc, this));
			this.linkFamilSiteSiteMap.on('click', $.proxy(this.sitemapFamilyCloseFunc, this));


      // footer - familysite
			this.btnFooterFamilySite.on('click', $.proxy(this.footerFamilySiteOpenFunc, this));
			this.linkFooterFamilySite.on('focus', $.proxy(this.footerFamilySiteOpenFunc, this));
			this.linkFooterFamilySite.on('click', $.proxy(this.footerFamilySiteCloseFunc, this));
			this.areaFooterFamilySite.on('mouseleave', $.proxy(this.footerFamilySiteCloseFunc, this));
		},
		gnbActiveFunc : function (e) {
			let target = $(e.currentTarget);
			this.gnbCurrentIdx = target.parents('li').index();
			this.itemGnb.eq(this.gnbPrevIdx).removeClass('is_active_gnb');
			this.itemGnb.eq(this.gnbCurrentIdx).addClass('is_active_gnb');
			this.gnbPrevIdx = this.gnbCurrentIdx;
		},
		gnbCloseFunc : function (e) {
			this.itemGnb.removeClass('is_active_gnb');
		},
		sitemapOpenFunc : function () {
			this.btnHam.prop('disabled',true);
			this.areaSitemap.show();
			if(window.innerWidth < 769) {
				$('body').css({
					'--content-min-width': '100%',
					'overflow': 'hidden',
					'height': '100%',
					'min-height': '100%',
				});
			}else {
				$('body').css({
					'overflow': 'hidden',
					'height': '100%',
					'min-height': '100%',
				});
			}
		},
		sitemapCloseFunc : function () {
			this.btnHam.removeAttr('disabled');
			this.areaSitemap.hide();
			$('body').removeAttr('style');
		},
		sitemapToggleFunc : function (e) {
			let target = $(e.currentTarget);
			this.sitemapCurrentIdx = target.parents('li').index();
			if(this.sitemapPrevIdx == this.sitemapCurrentIdx){
				this.itemsSitemap.eq(this.sitemapPrevIdx).toggleClass('is_open');
			}else{
				this.itemsSitemap.eq(this.sitemapPrevIdx).removeClass('is_open');
				this.itemsSitemap.eq(this.sitemapCurrentIdx).addClass('is_open');
			}
			this.sitemapPrevIdx = this.sitemapCurrentIdx;
		},
		btnSiteMapToggleActiveFunc : function () {
			if(window.innerWidth > 769) {
				this.btnSiteMapToggle.prop('disabled', true);
			} else {
				this.btnSiteMapToggle.removeAttr('disabled');
			}
		},
		sitemapFamilyOpenFunc : function () {
			if(this.innerFamilSiteSiteMap.hasClass('is_open_familysite')){
				this.innerFamilSiteSiteMap.removeClass('is_open_familysite');
			}else{
				this.innerFamilSiteSiteMap.addClass('is_open_familysite');
			}
		},
		sitemapFamilyCloseFunc : function () {
			this.innerFamilSiteSiteMap.removeClass('is_open_familysite');
		},
		familySiteOpenFunc : function () {
			this.areaFamilySite.addClass('is_open_familysite');
		},
		familySiteCloseFunc : function () {
			this.areaFamilySite.removeClass('is_open_familysite');
		},
		footerFamilySiteOpenFunc : function () {
			if(this.areaFooterFamilySite.hasClass('is_open_familysite')){
				this.areaFooterFamilySite.removeClass('is_open_familysite');
			}else{
				this.areaFooterFamilySite.addClass('is_open_familysite');
			}
		},
		footerFamilySiteCloseFunc : function () {
			this.areaFooterFamilySite.removeClass('is_open_familysite');
		},
	};

	$(function () {
		new win.PROJECTORY.commonJs();
	});
})(window, window.jQuery);
