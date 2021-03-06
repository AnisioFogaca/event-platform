import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link } from 'react-router-dom';
 
interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {

    const isLessonAvailable  = isPast(props.availableAt)    
    const avalableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
        locale: ptBR,
    })

    return(
        
        <Link to={`/event/lesson/${props.slug}`} className="group">
        <span className="text-grey-300">
            {avalableDateFormatted}
        </span>

            <div className="rounded border border-grey-500 p-4 mt-2 group-hover:border-green-500">
                <header className="flex items-center justify-between">
                   {isLessonAvailable ? (
                     <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
                     <CheckCircle size={20} />
                     Consteudo liberado
                 </span>
                   ) : (
                    <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                    <Lock size={20} />
                    Em breve
                </span>
                   )}
                    <span className="text-xs rounded py-[2px] px-2 text-white border border-green-300 font-bold">
                        {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                        </span>
                </header>
                <strong className="text-grey-200 mt-5 block">{props.title}</strong>
            </div>
        </Link>
    )
}