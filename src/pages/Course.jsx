
import Content from "/src/components/Content.jsx";
import Header from "../components/Header.jsx";


const Course = () => {
    //const course = 'Half Stack application development'

    const courses = [
        {
            name: 'Half Stack application development',
            id: 1,
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
                },
                {
                    name: 'Redux',
                    exercises: 11,
                    id: 4
                }
            ]
        },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
                }
            ]
        }
    ]


    return (
        <div>
            {courses.map((course) => {
                const totalExercises = course.parts.reduce(
                    (sum, part) => sum + part.exercises,
                    0
                )

                return (
                    <div key={course.id}>
                        <Header title={course.name} />
                        <Content parts={course.parts} />
                        <p><strong>total of {totalExercises} exercises</strong></p>
                    </div>
                )
            })}
        </div>
    )
}

export default Course