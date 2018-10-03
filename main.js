// Page elements
const $input = $('#dreamLand');
const $submit = $('#go');
const $container = $('.container');
const $destination = $('#destination');
const $venueDivs = [$('#venue1'), $('#venue2'), $('#venue3'), $('#venue4')];
const $weatherDivs = [$('#weather1'), $('#weather2'), $('#weather3'), $('#weather4')];

const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const searchDestination = () => {
    // Empty divs on new input
    $venueDivs.forEach(venue => {
        return venue.empty();
    });
    $weatherDivs.forEach(day => {
        return day.empty();
    });
    $destination.empty();
}

$submit.click(searchDestination);