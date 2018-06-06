// Get the elements
var video = $("#myVideo");
var enterButton = $("#enterButton");
var fullscreen = $("#fullscreen-bg");
var logo = $("#logoBig");
var flex = $("#flex-container");
var header = $("header");
var upload = $("#upload");
var uploadLink = $("#uploadLink");
var festivalsLink = $("#festivalsLink");
var timeline = $("#timeline");
var timelineDay = $("#timelineDay");
var dayOneButton = $("#dayOneButton");
var dayTwoButton = $("#dayTwoButton");
var dayThreeButton = $("#dayThreeButton");

var dayOne = $("#dayOne");
var dayTwo = $("#dayTwo");
var dayThree = $("#dayThree");

var timelineLinks = $("#timeline a");

$('img').on('dragstart', function (event) {
    event.preventDefault();
});

enterButton.click(function () {
    fullscreen.hide();
    logo.fadeOut(250);
    enterButton.fadeOut(100);
    $(".flex-item").fadeIn(500);
    header.fadeIn(500);
    $("#myVideo").playbackRate = 0.5;
});

uploadLink.click(function () {
    upload.fadeIn(250);
    $(".flex-item").fadeOut(150);
    timeline.fadeOut(150);
    timelineDay.fadeOut(150);
});

$(".return").click(function () {
    dayOne.fadeOut(150);
    dayTwo.fadeOut(150);
    dayThree.fadeOut(150);
    timelineDay.fadeIn(150);
})
festivalsLink.click(function () {
    $(".flex-item").fadeIn(250);
    upload.fadeOut(150);
    timeline.fadeOut(150);
    timelineDay.fadeOut(150);
});

timelineLinks.click(function (){
    $("#timeline").fadeOut(150);
    timelineDay.fadeIn(250);
    $(".cd-timeline").fadeIn(250);
    function VerticalTimeline(element) {
        this.element = element;
        this.blocks = this.element.getElementsByClassName("js-cd-block");
        this.images = this.element.getElementsByClassName("js-cd-img");
        this.contents = this.element.getElementsByClassName("js-cd-content");
        // ...
    };

    VerticalTimeline.prototype.showBlocks = function () {
        var self = this;
        for (var i = 0; i < this.blocks.length; i++) {
            (function (i) {
                if (self.contents[i].classList.contains("cd-is-hidden") && self.blocks[i].getBoundingClientRect().top <= window.innerHeight * self.offset) {
                    // add bounce-in animation
                    self.images[i].classList.add("cd-timeline__img--bounce-in");
                    self.contents[i].classList.add("cd-timeline__content--bounce-in");
                    self.images[i].classList.remove("cd-is-hidden");
                    self.contents[i].classList.remove("cd-is-hidden");
                }
            })(i);
        }
    };

    (function () {
        function VerticalTimeline(element) {
            this.element = element;
            this.blocks = this.element.getElementsByClassName("js-cd-block");
            this.images = this.element.getElementsByClassName("js-cd-img");
            this.contents = this.element.getElementsByClassName("js-cd-content");
            this.offset = 0.8;
            this.hideBlocks();
        };

        VerticalTimeline.prototype.hideBlocks = function () {
            //hide timeline blocks which are outside the viewport
            if (!"classList" in document.documentElement) {
                return;
            }
            var self = this;
            for (var i = 0; i < this.blocks.length; i++) {
                (function (i) {
                    if (self.blocks[i].getBoundingClientRect().top > window.innerHeight * self.offset) {
                        self.images[i].classList.add("cd-is-hidden");
                        self.contents[i].classList.add("cd-is-hidden");
                    }
                })(i);
            }
        };

        VerticalTimeline.prototype.showBlocks = function () {
            if (!"classList" in document.documentElement) {
                return;
            }
            var self = this;
            for (var i = 0; i < this.blocks.length; i++) {
                (function (i) {
                    if (self.contents[i].classList.contains("cd-is-hidden") && self.blocks[i].getBoundingClientRect().top <= window.innerHeight * self.offset) {
                        // add bounce-in animation
                        self.images[i].classList.add("cd-timeline__img--bounce-in");
                        self.contents[i].classList.add("cd-timeline__content--bounce-in");
                        self.images[i].classList.remove("cd-is-hidden");
                        self.contents[i].classList.remove("cd-is-hidden");
                    }
                })(i);
            }
        };

        var verticalTimelines = document.getElementsByClassName("js-cd-timeline"),
            verticalTimelinesArray = [],
            scrolling = false;
        if (verticalTimelines.length > 0) {
            for (var i = 0; i < verticalTimelines.length; i++) {
                (function (i) {
                    verticalTimelinesArray.push(new VerticalTimeline(verticalTimelines[i]));
                })(i);
            }

            //show timeline blocks on scrolling
            window.addEventListener("scroll", function (event) {
                if (!scrolling) {
                    scrolling = true;
                    (!window.requestAnimationFrame) ? setTimeout(checkTimelineScroll, 250): window.requestAnimationFrame(checkTimelineScroll);
                }
            });
        }

        function checkTimelineScroll() {
            verticalTimelinesArray.forEach(function (timeline) {
                timeline.showBlocks();
            });
            scrolling = false;
        };
    })();
});

dayOneButton.click(function () {
   timelineDay.fadeOut(150);
    dayOne.fadeIn(150);
});

dayTwoButton.click(function () {
   timelineDay.fadeOut(150);
    dayTwo.fadeIn(150);
});

dayThreeButton.click(function () {
   timelineDay.fadeOut(150);
    dayThree.fadeIn(150);
});

$(".flex-item").click(function () {
    $(".flex-item").fadeOut(150);
    $("#timeline").fadeIn(250);
    $(".cd-timeline").fadeIn(250);

    function VerticalTimeline(element) {
        this.element = element;
        this.blocks = this.element.getElementsByClassName("js-cd-block");
        this.images = this.element.getElementsByClassName("js-cd-img");
        this.contents = this.element.getElementsByClassName("js-cd-content");
        // ...
    };

    VerticalTimeline.prototype.showBlocks = function () {
        var self = this;
        for (var i = 0; i < this.blocks.length; i++) {
            (function (i) {
                if (self.contents[i].classList.contains("cd-is-hidden") && self.blocks[i].getBoundingClientRect().top <= window.innerHeight * self.offset) {
                    // add bounce-in animation
                    self.images[i].classList.add("cd-timeline__img--bounce-in");
                    self.contents[i].classList.add("cd-timeline__content--bounce-in");
                    self.images[i].classList.remove("cd-is-hidden");
                    self.contents[i].classList.remove("cd-is-hidden");
                }
            })(i);
        }
    };

    (function () {
        function VerticalTimeline(element) {
            this.element = element;
            this.blocks = this.element.getElementsByClassName("js-cd-block");
            this.images = this.element.getElementsByClassName("js-cd-img");
            this.contents = this.element.getElementsByClassName("js-cd-content");
            this.offset = 0.8;
            this.hideBlocks();
        };

        VerticalTimeline.prototype.hideBlocks = function () {
            //hide timeline blocks which are outside the viewport
            if (!"classList" in document.documentElement) {
                return;
            }
            var self = this;
            for (var i = 0; i < this.blocks.length; i++) {
                (function (i) {
                    if (self.blocks[i].getBoundingClientRect().top > window.innerHeight * self.offset) {
                        self.images[i].classList.add("cd-is-hidden");
                        self.contents[i].classList.add("cd-is-hidden");
                    }
                })(i);
            }
        };

        VerticalTimeline.prototype.showBlocks = function () {
            if (!"classList" in document.documentElement) {
                return;
            }
            var self = this;
            for (var i = 0; i < this.blocks.length; i++) {
                (function (i) {
                    if (self.contents[i].classList.contains("cd-is-hidden") && self.blocks[i].getBoundingClientRect().top <= window.innerHeight * self.offset) {
                        // add bounce-in animation
                        self.images[i].classList.add("cd-timeline__img--bounce-in");
                        self.contents[i].classList.add("cd-timeline__content--bounce-in");
                        self.images[i].classList.remove("cd-is-hidden");
                        self.contents[i].classList.remove("cd-is-hidden");
                    }
                })(i);
            }
        };

        var verticalTimelines = document.getElementsByClassName("js-cd-timeline"),
            verticalTimelinesArray = [],
            scrolling = false;
        if (verticalTimelines.length > 0) {
            for (var i = 0; i < verticalTimelines.length; i++) {
                (function (i) {
                    verticalTimelinesArray.push(new VerticalTimeline(verticalTimelines[i]));
                })(i);
            }

            //show timeline blocks on scrolling
            window.addEventListener("scroll", function (event) {
                if (!scrolling) {
                    scrolling = true;
                    (!window.requestAnimationFrame) ? setTimeout(checkTimelineScroll, 250): window.requestAnimationFrame(checkTimelineScroll);
                }
            });
        }

        function checkTimelineScroll() {
            verticalTimelinesArray.forEach(function (timeline) {
                timeline.showBlocks();
            });
            scrolling = false;
        };
    })();
});

$(function () {
    $(".tintImg").each(function () {
        $(this).wrap('<div class="tint"></div>');
    });
});

// timeline js
