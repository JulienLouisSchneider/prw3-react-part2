
import Content from "/src/components/Content.jsx";
import Header from "../components/Header.jsx";


const Course = () => {
    //const course = 'Half Stack application development'

    const course = {
        id: 1,
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            }
        ]
    }

    const totalExercises = course.parts.reduce(
        (sum, part) => sum + part.exercises,
        0
    )


    return (
        <div>
            <Header title={course} />
            <Content parts={course.parts} />
            <p><strong>total of {totalExercises} exercises</strong></p>
        </div>
    )
}

export default Course