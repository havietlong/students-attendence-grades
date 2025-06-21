import { ApiPropertyOptional } from '@nestjs/swagger';
import {
    IsOptional,
    IsString,
    IsInt,
    IsDate,
    IsNumber,
    IsIn,
    Matches,
} from 'class-validator';
import { Type } from 'class-transformer';

export class FilterCourseClassDto {
    @ApiPropertyOptional({ description: 'Filter by subject code (e.g., MATH101)' })
    @IsOptional()
    @IsString()
    subjectCode?: string;

    @ApiPropertyOptional({ description: 'Filter by lecturer ID (e.g., GV01)' })
    @IsOptional()
    @IsString()
    lecturerId?: string;

    @ApiPropertyOptional({ description: 'Filter by semester (e.g., 1 or 2)', type: Number })
    @IsOptional()
    @IsInt()
    @Type(() => Number)
    semester?: number;

    @ApiPropertyOptional({ description: 'Filter by academic year (e.g., 2024-2025)' })
    @IsOptional()
    @Matches(/^\d{4}-\d{4}$/, { message: 'Academic year must be in YYYY-YYYY format' })
    academicYear?: string;

    @ApiPropertyOptional({ description: 'Filter by classroom name or code' })
    @IsOptional()
    @IsString()
    classroom?: string;

    @ApiPropertyOptional({
        description: 'Filter by day of week (0=Sunday, 1=Monday, ..., 6=Saturday)',
        type: Number,
    })
    @IsOptional()
    @IsInt()
    @IsIn([0, 1, 2, 3, 4, 5, 6])
    @Type(() => Number)
    dayOfWeek?: number;

    @ApiPropertyOptional({
        description: 'Filter sessions starting on or after this date (YYYY-MM-DD)',
        type: String,
        format: 'date',
    })
    @IsOptional()
    @IsDate()
    @Type(() => Date)
    startDate?: Date;

    @ApiPropertyOptional({
        description: 'Filter sessions ending on or before this date (YYYY-MM-DD)',
        type: String,
        format: 'date',
    })
    @IsOptional()
    @IsDate()
    @Type(() => Date)
    endDate?: Date;

    @ApiPropertyOptional({ description: 'Filter by major ID' })
    @IsOptional()
    @IsString()
    majorId?: string;
}
