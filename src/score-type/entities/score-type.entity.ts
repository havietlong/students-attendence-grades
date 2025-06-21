import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { ScoreDetail } from 'src/score-detail/entities/score-detail.entity';
import { ApiProperty } from '@nestjs/swagger';
import { SubjectScoreConfig } from 'src/subject-score-config/entities/subject-score-config.entity';

@Entity('score_types')  // English table name for clarity, or keep 'loaidiem' if you prefer
export class ScoreType {
    @ApiProperty({ example: 'LD01' })
    @PrimaryColumn({ type: 'varchar', length: 10 })
    scoreTypeId: string;  // renamed from ma_loai_diem

    @ApiProperty({ example: 'Midterm Exam' })
    @Column({ type: 'varchar', length: 50 })
    scoreTypeName: string; // renamed from ten_loai_diem

    // @ApiProperty({ example: 20.0 })
    // @Column({ type: 'float' })
    // percentage: number; // renamed from ty_le_phan_tram

    @OneToMany(() => ScoreDetail, (scoreDetail) => scoreDetail.scoreType)
    scoreDetails: ScoreDetail[];

    @OneToMany(() => SubjectScoreConfig, (config) => config.scoreType)
    subjectScoreConfigs: SubjectScoreConfig[];
}
