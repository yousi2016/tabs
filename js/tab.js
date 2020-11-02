;(function ($, window, document, undefined) {
			function DysTabs(elem, options) {
				this._default={
					$navobj:$('.dys_tab_nav'),
					$conobj:$('.dys_tab_body'),
					$userevent:'click',
					$nav_classname:'.dys_lyhf',
					$body_classname:'.dys_zhengji_content_item'
				};
				
				this.opt=$.extend({}, this._default, options);
				
				this.init();
				
			};
			
			DysTabs.prototype={
				init:function(){
					this.tabs();
				},
				tabs:function(){
					
					 	var _this=this;
					 	
						this.opt.$conobj.find(this.opt.$body_classname).hide();
						this.opt.$conobj.find(this.opt.$body_classname).eq(0).show();
						this.opt.$navobj.find(this.opt.$nav_classname).on(this.opt.$userevent, function (event) {
							
							event.preventDefault();
							 var index=_this.opt.$navobj.find(_this.opt.$nav_classname).index($(this));
							 console.log(index)
							 _this.opt.$conobj.find(_this.opt.$body_classname).eq(index).show().siblings().hide();
							 
							 
						});
				}
			};
			$.fn.dysTab=function (options) {
				
				new DysTabs(this, options);
				
				return this.each(function () {
					
					
					
				});
					
					
			};
			
	})(jQuery, window, document);