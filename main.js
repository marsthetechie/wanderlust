// Page elements
const $input = $('#dreamLand');
const $submit = $('#go');
const $container = $('.container');
const $destination = $('#destination');
const $venueDivs = [$('#venue1'), $('#venue2'), $('#venue3'), $('#venue4')];
const $weatherDivs = [$('#weather1'), $('#weather2'), $('#weather3'), $('#weather4')];

const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const clientId;
const clientSecret;
const url = 'https://api.foursquare.com/v2/venues/explore?';

const getVenues = async () => {
    let limit = 10;
    const city = $input.val();
    const urlToFetch = `${url}client_id=${clientId}&client_secret=${clientSecret}&v=20181004&limit=${limit}&near=${city}`;

    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const jsonResponse = response.json();
            const venues = jsonResponse.response.groups[0].items.map(item => {
                return item.venue;
            })
            return venues;
        } else {
            throw new Error('Failed!');
        }
    } catch (error) {
        alert(error.message);
    }
}

const searchDestination = () => {
    // Empty divs on new input
    $venueDivs.forEach(venue => {
        return venue.empty();
    });
    $weatherDivs.forEach(day => {
        return day.empty();
    });
    $destination.empty();
    $container.css("visibiity", "visible");
}

$submit.click(searchDestination);