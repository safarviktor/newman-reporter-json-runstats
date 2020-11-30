var _ = require('lodash');

/**
 * Custom reporter that dumps just the run status
 * Built using the original JSON reporter and newman-reporter-json-light as templates
 *
 * @param {Object} newman - The collection run object, with event hooks for reporting run details.
 * @param {Object} options - A set of collection run options.
 * @param {String} options.export - The path to which the summary object must be written.
 * @returns {*}
 */

function createLightSummary(summary) {
    summary = _.pick(summary, ['run']);

    var lightSummary = {}
    Object.assign(lightSummary, {        
        'run': {
            'stats': summary.run.stats
        }
    });
    return lightSummary
}

module.exports = function(newman, options) {
    newman.on('beforeDone', function(err, o) {
        newman.exports.push({
            name: 'newman-reporter-json-runstats',
            default: 'newman-run-report-runstats.json',
            path:  options.jsonExport,
            content: JSON.stringify(createLightSummary(o.summary))
        });
    });
};