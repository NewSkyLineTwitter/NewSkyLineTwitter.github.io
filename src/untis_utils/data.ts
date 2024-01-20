import { Lesson } from "webuntis";
import { ILesson } from "./ints";
import { parseDate } from "../untis";

function parseTimetable(data: Lesson[]): ILesson[] {
    let lessons: ILesson[] = [];

    // Check if all the data is there
    data.forEach((lesson) => {
        let room: string = "";
        let teacher: string = "";
        let subject: string = "";
        let start = new Date();
        let end = new Date();

        if (lesson.ro && lesson.ro.length > 0) {
            room = lesson.ro[0].name;
        }
        if (lesson.te && lesson.te.length > 0) {
            teacher = lesson.te[0].name;
        }
        if (lesson.su && lesson.su.length > 0) {
            subject = lesson.su[0].name;
        }
        if (lesson.startTime && lesson.endTime) {
            start = parseDate(lesson.date, lesson.startTime);
            end = parseDate(lesson.date, lesson.endTime);
        }
        lessons.push({
            name: subject,
            teacher: teacher,
            room: room,
            startTime: start,
            endTime: end,
            description: "",
        });
    });

    return lessons;
}

export { parseTimetable };