class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    get_interval() {
        return `[${this.start}, ${this.end}]`;
    }
}

const merge = intervals => {
    if (intervals.length < 2) {
        return intervals;
    }

    intervals.sort((a, b) => a.start - b.start);

    const mergedIntervals = [];
    let start = intervals[0].start;
    let end = intervals[0].end;
    for (let i = 1; i < intervals.length; i++) {
        const interval = intervals[i];
        if (interval.start <= end) {
            end = Math.max(interval.end, end);
        } else {
            mergedIntervals.push(new Interval(start, end));
            start = interval.start;
            end = interval.end;
        }
    }
    mergedIntervals.push(new Interval(start, end));
    return mergedIntervals;
}

// TC: O(n * log n)
// SC: O(n)

mergedIntervals = merge([new Interval(1, 4), new Interval(2, 5), new Interval(7, 9)]);
result = "";
for(i=0; i < mergedIntervals.length; i++) {
  result += mergedIntervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`)


mergedIntervals = merge([new Interval(6, 7), new Interval(2, 4), new Interval(5, 9)]);
result = "";
for(i=0; i < mergedIntervals.length; i++) {
  result += mergedIntervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`)


mergedIntervals = merge([new Interval(1, 4), new Interval(2, 6), new Interval(3, 5)]);
result = "";
for(i=0; i < mergedIntervals.length; i++) {
  result += mergedIntervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`)