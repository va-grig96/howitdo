// Инициализируем Swiper
new Swiper('.image-slider', {
	// Стрелки
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	// Навигация
	// Буллеты, текущее положение, прогрессбар
	pagination: {
		el: '.swiper-pagination',
		/*
		// Буллеты
		type: 'bullets',
		clickable: true,
		// Динамические буллеты
		dynamicBullets: true,
		// Кастомные буллеты
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + '</span>';
		},
		*/

		/*
		// Фракция
		type: 'fraction',
		// Кастомный вывод фракции
		renderFraction: function (currentClass, totalClass) {
			return 'Фото <span class="' + currentClass + '"></span>' +
				' из ' +
				'<span class="' + totalClass + '"></span>';
		},
		*/

		/*
		// Прогрессбар
		type: 'progressbar'
		*/
	},

	/*
	// Скролл
	scrollbar: {
		el: '.swiper-scrollbar',
		// Возможность перетаскивать скролл
		draggable: true
	},
	*/

	// Включение/отключение
	// перетаскивания на ПК
	simulateTouch: true,
	// Чувствительность свайпа
	touchRatio: 1,
	// Угол срабатывания свайпа/перетаскивания
	touchAngle: 45,
	// Курсор перетаскивания
	grabCursor: true,

	// Переключение при клике на слайд
	slideToClickedSlide: false,

	// Навигация по хешу
	hashNavigation: {
		// Отслеживать состояние
		watchState: true,
	},

	// Управление клавиатурой
	keyboard: {
		// Включить\выключить
		enabled: true,
		// Включить\выключить
		// только когда слайдер
		// в пределах вьюпорта
		onlyInViewport: true,
		// Включить\выключить
		// управление клавишами
		// pageUp, pageDown
		pageUpDown: true,
	},

	// Управление колесом мыши
	mousewheel: {
		// Чувствительность колеса мыши
		sensitivity: 1,
		// Класс объекта, на котором
		// будет срабатывать прокрутка мышью
		eventsTarget: "image-slider"
	},

	// Автовысота
	autoHeight: false,

	// Кол-во слайдов для показа
	slidesPerView: 1, // или auto

	// Отключение функционала
	// если слайдов меньше, чем нужно
	watchOverflow: true,

	// Отступ между слайдами (в px)
	spaceBetween: 30,

	// Кол-во пролистываемых слайдов
	slidesPerGroup: 1,

	// Активынй слайд по центру
	// centeredSlides: true,

	// Стартовый слайд от 0
	initialSlide: 0,

	// Мультирядность (autoHeight: false,)
	slidesPerColumn: 1,

	// Бесконечный слайдер
	loop: false,
	// Кол-во дублирующих слайдов
	loopedSlides: 0,

	// Свободный режим
	freeMode: false,

	/*
	// Автопрокрутка
	autoplay: {
	// Пауза между прокруткой
	delay: 1000,
	// Закончить на последнем слайде
	stopOnLastSlide: true,
	// Отключить после ручного перетаскивания
	disableOnInteraction: false
	},
	*/

	// Скорость
	speed: 800,

	// Вертикальный слайдер
	direction: 'horizontal', // vertical

	// Эффекты переключения слайдов
	// Листание
	effect: 'slide',

	/*
	// Эффекты переключения слайдов
	// Смена прозрачности
	effect: 'fade',

	// Дополнение к fade
	fadeEffect: {
		// Параллельная
		// смена прозрачности
		crossFade: true
	},
	*/

	/*
	// Эффекты переключения слайдов
	// Переворот
	effect: 'flip',

	// Дополнение к flip
	flipEffect: {
		// Тень
		slideShadows: true,
		// Показ только активного слайда
		limitRotation: true
	},
	*/

	/*
	// Эффекты переключения слайдов
	// Куб
	effect: 'cube',

	// Дополнение к cube
	cubeEffect: {
		// Настройки тени
		slideShadows: true,
		shadow: true,
		shadowOffset: 20,
		shadowScale: 0.94
	},
	*/

	/*
	// Эффекты переключения слайдов
	// Эффект потока
	effect: 'coverflow',

	// Дополнение к coverflow
	coverflowEffect: {
		// Угол
		rotate: 20,
		// Наложение
		stretch: 50,
		// Тень
		slideShadows: true,
	},
	*/

	// Брейк поинты (адаптив)
	// Ширина экрана от
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		}
	},

	// Отключить предзагрузку картинок
	preloadImages: false,
	// Lazy Loading
	// (подгрузка картинок)
	lazy: {
		// Подгружать на старте
		// переключения слайда
		loadOnTransitionStart: false,
		// Подгрузить предыдущую
		// и следующую картинки
		loadPrevNext: false,
	},
	// Слежка за видимыми слайдами
	watchSlidesProgress: true,
	// Добавление класса видимым слайдам
	watchSlidesVisibility: true,

	/*
	// Миниатюры (превью)
	thumbs: {
		// Свайпер с миниатюрами
		// и его настройки
		swiper: {
			el: '.image-mini-slider',
			slidesPerView: 5,
		}
	}
	*/

	// Обновить слайдер
	// при изменении элементов слайдера
	observer: true,

	// Обновить свайпер
	// при изменении родительских
	// элементов слайдера
	observeParents: true,

	// Обновить свайпер
	// при изменении дочерних
	// элементов слайда
	observeSlideChildren: true,
});

new Swiper('.image-slider_virtual', {
	// Стрелки
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},

	// Виртуальные слайды
	// формирование слайдера
	virtual: {
		slides: (function () {
			let slide = []
			for (let i = 0; i < 500; i++) {
				slide.push(`<div class="image-slider__image">Слайд №${i}</div>`);
			}
			return slide;
		}()),
	},
});

// Слайдер в слайдере
new Swiper('.image-in-slider', {
	// Курсор перетаскивания
	grabCursor: true,
	// Навигация
	// пагинация, текущее положение, прогрессбар
	pagination: {
		el: '.swiper-pagination',
		// Буллеты
		clickable: true,
	},
});
