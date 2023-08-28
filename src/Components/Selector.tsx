import { FC } from "react";

export const Selector: FC<{options: number[]; onChange: (id: number) => void}> = ({onChange, options}) => {
    return (
        <select
            className={'album-selector'}
            onChange={(e) => onChange(Number(e.target.value))}
            placeholder="Select Album"
        >
            <option key={'all'} value={undefined}>all</option>
            {options.map((id) => 
                <option value={id} key={id}>
                    {id}
                </option>,
            )}
        </select>
    )
}