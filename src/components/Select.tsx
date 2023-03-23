import { Box, FormControl, InputLabel, TextField } from "@mui/material";
import { FIPE } from "../contexts/interface";
import { Option, SelectContainer } from "../styles/components/form";

interface MuiSelectProps {
    value: any;
    method: any;
    options: FIPE[];
    title: string;
}

export const MuiSelect = ({title, value, method, options}:MuiSelectProps) => {
    return (
        <FormControl sx={{ p: -5 , minWidth: 120 }}>
            <InputLabel id={`${title}inputId`}>{title}</InputLabel>
            <SelectContainer
                label={title}
                labelId={`${title}inputId`}
                id={`${title}id`}
                value={value}
                onChange= {method}
                >
                 {options?.map((option, key) =>{
              return (
                <Option key= {key} value={option.codigo}>{option.nome}</Option>
            )})}
            </SelectContainer>
        </FormControl>
    )
}