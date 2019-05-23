/* feedreader.js */

$(function () {

    /* This suite is all about the RSS feeds definitions */

    describe('RSS Feeds', function () {

        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('has a URL defined and not empty', function () {
            // for each feed
            for (let feed of allFeeds) {
                // ensures it has a defined URL
                expect(feed.url).toBeDefined();
                // ensures the URL is not empty
                expect(feed.url).not.toBe('');
                // ensures the URL is not equal to null
                expect(feed.url).not.toEqual(null);
            }
        });

        it('has a name defined and not empty', function () {
            // for each feed
            for (let feed of allFeeds) {
                // ensures it has a defined name
                expect(feed.name).toBeDefined();
                // ensures the name is not empty
                expect(feed.name).not.toBe('');
                // ensures the name is not equal to null
                expect(feed.name).not.toEqual(null);
            }
        });

    });


    /* This suite is all about the menu element */

    describe('The menu', function () {

        /* This test ensures that the menu element is hidden by default. */

        it('menu is hidden by default', function () {
            const body = document.querySelector('body');
            expect(body).toHaveClass('menu-hidden');
        });

        /* This test ensures that the menu is changing
        * visibility when the menu icon is clicked. */

        it('menu show/hide when clicked', function () {
            $menuIcon = $('.menu-icon-link')
            const body = document.querySelector('body');
            // first click to show
            $menuIcon.trigger('click')
            expect(body).not.toHaveClass('menu-hidden');
            // second click to hide
            $menuIcon.trigger('click')
            expect(body).toHaveClass('menu-hidden');
        });

    });


    /* This suite is about the Initial Entries */

    describe('Initial Entries', function () {

        /* This test ensures when the loadFeed
        * function is called and completes its work, there is at least
        * a single .entry element within the .feed container.
        */

        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        });

        it('at least has a single entry element', function (done) {
            feedList = $('.feed-list');
            expect(feedList[0].length).not.toBe(0);
            done();

        });
    });


    /* This suite is about the New Feed Selection */

    describe('New Feed Selection', function () {

        /* This test ensures when a new feed is loaded
        * by the loadFeed function that the content actually changes.
        */

        const feed = document.querySelector('.feed');
        let firstFeed;
        let secondFeed;

        beforeEach(function (done) {

            // first load
            loadFeed(0, function () {
                firstFeed = feed.innerText;

                // second load
                loadFeed(1, function () {
                    secondFeed = feed.innerText;
                    done();
                });

            });

        });


        it('the content changes after new feed is loaded', function (done) {
            /* Ensures that the feeds loaded are different */
            expect(firstFeed).not.toEqual(secondFeed);
            done();
        });
    });

}());
