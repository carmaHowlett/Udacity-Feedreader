/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO - FINISHED: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('Url is defined, not empty, and Url is formatted properly', function() {
            allFeeds.forEach(function(feed) {
                //checks if Url is defined
                expect(feed.url).toBeDefined();
                //checks if url is not empty
                expect(feed.length).not.toBe(0);
            });
        });


        /* TODO - FINISHED: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('Name is defined', function() {
            allFeeds.forEach(function(feed) {
                //checks if name is defined
                expect(feed.name).toBeDefined();
                //checks if name is not empty
                expect(feed.length).not.toBe('');
            });
        });
    });


    /* TODO - FINISHED: Write a new test suite named "The menu" */
    //Same format used from the first RSS Feeds test suite
    describe('The menu', function() {

        /* TODO - FINISHED: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        //'menu-hidden' makes sure the side menu is not visible by default //
        it('Side Menu is hidden by default', function() {
            //checks if side menu is hidden by default,
            expect($(document.body).hasClass('menu-hidden')).toBe(true);
        });

        /* TODO - FINISHED: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('Side Menu toggles visiblity when icon is clicked', function() {
            //checks if menu hides when icon is clicked
            $('a.menu-icon-link').click();
            expect(document.body.className).not.toContain('menu-hidden');
            //checks if menu displays when icon is clicked again
            $('a.menu-icon-link').click();
            expect(document.body.className).toContain('menu-hidden');
        });
    });

    /* TODO - FINISHED: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        /* TODO - FINISHED: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        it('Has an entry in the feed container', function(done) {
            //checks if entry h2 has a single element within in
            expect($('.entry h2').length).not.toBe([0]);
            done();
        });
    });


    /* TODO - FINISHED: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        var feed0;
        var feed1;
        beforeEach(function(done) {
            loadFeed(0, function() {
                $feed0 = $('.header-title').html();
                loadFeed(1, function() {
                    $feed1= $('.header-title').html();
                    done();
                });
            });
        });

        /* TODO - FINISHED: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        it('Content actually changes', function(done) {
            //checks that $feed0 and $feed1 are different
            expect($feed0).not.toBe($feed1);
            done();
        });
    });
}());
