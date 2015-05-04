$(function() {
	$('.cover-section').addClass('animate-in');
	$('.navbar-default').addClass('animate-in');

	var $sections = $('.section'),
		sectionMap = {};

	var calcSections = function() {
		$sections.each(function(ind, section) {
			section = $(section);
			sectionMap[section.attr('id')] = section.offset().top;
		});
	};

	calcSections();
	$(window).on('resize', calcSections);

	var $navs = $('.navbar-nav li');
	$('.navbar-nav li a, .header-logo').on('click', function(ev) {
		var $target = $(this),
			href = $target.attr('href'),
			windowWidth = $(window).width();

		var $scrollSection = $(href);

		if ($scrollSection.length) {
			var bodyScroll = $scrollSection.offset().top;

			$('body, html').animate({
				scrollTop: bodyScroll - 56
			}, 640);
		}

		if (windowWidth <= 768) {
			$('button.navbar-toggle').click();
		}

		return false;
	});

	var activateNav = function(nav) {
		$navs.removeClass('active');
		$('.navbar a[href="#'+nav+'"]').parent().addClass('active');
	};

	$(window).on('scroll', function() {
		var curScroll = $('body').scrollTop() + 96;

		$.each(sectionMap, function(a, b) {
			if (curScroll > b) {
				activateNav(a);
			}
		});
	});

	setInterval(function() {
		var $active = $('.speaker-jumbo.active'),
			$next = $active.next();

		if (!$next.length) $next = $('.speaker-jumbo').first();

		$active.removeClass('active');
		$next.addClass('active');
	}, 6000);

	$('.learn-more').on('click', function() {
		$('.navbar-nav li a[href="#themes"]').click();
		return false;
	});
});
